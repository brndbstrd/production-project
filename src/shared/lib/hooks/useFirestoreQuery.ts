import { useQuery, useQueryClient } from "@tanstack/react-query"
import { QueryConstraint, QuerySnapshot } from "firebase/firestore"
import { useEffect, useMemo, useRef, useState } from "react"
import { FirestoreSchema } from "shared/api/firestoreSchemas"
import { listenByQuery } from "shared/config/firebase/firestore"
import isEqual from 'lodash.isequal';
interface useFirestoreDocProps<C extends keyof FirestoreSchema> {
    queryKey: string[],
    constraints: QueryConstraint[]
    collectionName: C
}
type QueryResult<C extends keyof FirestoreSchema> = (FirestoreSchema[C] & { id: string })[]
export const useFirestoreQuery = <C extends keyof FirestoreSchema>(props: useFirestoreDocProps<C>) => {
    const { constraints, queryKey, collectionName } = props
    const queryClient = useQueryClient()
    const resolveRef = useRef<(data: QueryResult<C>) => void>(null)

    const isEnabled = !!constraints.length

    const dataPromise = useMemo(() => {
        return new Promise<QueryResult<C>>((resolve) => {
            resolveRef.current = resolve
        })
    }, [queryKey])

    const handleQuerySnapshot = (snapshot: QuerySnapshot<FirestoreSchema[C]>) => {
        let data: QueryResult<C>
        if ('docs' in snapshot) {
            data = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    ...doc.data()

                }))
            if (resolveRef.current) {
                resolveRef.current(data)
            }
            const currentData = queryClient.getQueryData<QueryResult<C>>(queryKey)

            if (areDataEqual(data, currentData)) {
                console.log('areDataEqual run');

                return
            }
            queryClient.setQueryData(queryKey, data);
            console.log(data, currentData);


        }
    }
    const areDataEqual = (a: QueryResult<C> | undefined, b: QueryResult<C> | undefined): boolean => {
        if (a === undefined && b === undefined) return true
        if (a === undefined || b === undefined) return false
        if (a.length !== b.length) return false

        const sortedSnapshot = [...a].sort((a, b) => a.id.localeCompare(b.id))
        const sortedCache = [...b].sort((a, b) => a.id.localeCompare(b.id))
        return isEqual(sortedSnapshot, sortedCache)
    }



    useEffect(() => {
        if (!isEnabled) return
        listenByQuery(collectionName, constraints, (snapshot) => {
            handleQuerySnapshot(snapshot)
        })
    }, [queryKey, constraints, isEnabled, collectionName])

    return useQuery({
        queryKey: queryKey,
        enabled: !!isEnabled,
        queryFn: () => dataPromise
    })


}

