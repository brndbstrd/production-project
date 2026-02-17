import { FirestoreSchema } from "shared/api/firestoreSchemas";
import { queryClient } from "../queryClientPersister/queryClientPersister";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useRef } from "react";
import { DocumentSnapshot } from "firebase/firestore";
import { listenById } from "shared/config/firebase/firestore";


interface useFirestoreDocProps<C extends keyof FirestoreSchema> {
    id: string,
    queryKey: string[]
    collectionName: C
}
type DocumentResult<C extends keyof FirestoreSchema> = FirestoreSchema[C] & { id: string }
export const useFirestoreDoc = <C extends keyof FirestoreSchema>(props: useFirestoreDocProps<C>) => {
    const { id, queryKey, collectionName } = props
    const queryClient = useQueryClient()
    const resolveRef = useRef<(data: DocumentResult<C>) => void>(null)

    const isEnabled = !!id

    const dataPromise = useMemo(() => {
        return new Promise<DocumentResult<C>>((resolve) => {
            resolveRef.current = resolve
        })
    }, [queryKey])

    const handleDocumentSnapshot = (snapshot: DocumentSnapshot<FirestoreSchema[C]>) => {
        let data: DocumentResult<C>


        if (snapshot instanceof DocumentSnapshot) {
            const docSnap = snapshot.data()
            if (!docSnap) throw new Error('no document')
            data = {
                id: snapshot.id,
                ...docSnap
            }
            if (resolveRef.current && data) {
                resolveRef.current(data)
            }
            queryClient.setQueryData(queryKey, data)
        }

    }

    useEffect(() => {
        if (!isEnabled) return
        listenById(collectionName, id, (snapshot) => {
            handleDocumentSnapshot(snapshot)
        })

    }, [id, isEnabled, collectionName])

    return useQuery({
        queryKey: queryKey,
        enabled: !!isEnabled,
        queryFn: () => dataPromise
    })


}

