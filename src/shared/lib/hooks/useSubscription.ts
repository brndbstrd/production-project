import { useQueryClient } from "@tanstack/react-query";
import { QueryConstraint, QuerySnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { FirestoreSchema } from "shared/api/firestoreSchemas";
import { listenByQuery } from "shared/config/firebase/firestore";

interface useSubscriptionProps<C extends keyof FirestoreSchema> {
    isEnabled: boolean,
    // isLoading: boolean,
    queryKey: string[],
    constraints: QueryConstraint[],
    collectionName: C,
    handleQuerySnapshot: (snapshot: QuerySnapshot<FirestoreSchema[C]>) => void
}


export const useSubscription = <C extends keyof FirestoreSchema>(props: useSubscriptionProps<C>) => {
    const { isEnabled, collectionName, constraints, queryKey, handleQuerySnapshot } = props




    return useEffect(() => {
        if (!isEnabled) return
        listenByQuery(collectionName, constraints, (snapshot) => {
            handleQuerySnapshot(snapshot)
        })

    }, [])
}

