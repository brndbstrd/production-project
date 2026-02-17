// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { DocumentData, DocumentSnapshot, onSnapshot, Query, QueryConstraint, QuerySnapshot, where } from "firebase/firestore";
// import { useEffect, useMemo, useRef, useState } from "react";
// import { FirestoreDoc, FirestoreSchema } from "shared/api/firestoreSchemas";
// import { firestoreRef, listenById, listenByQuery, q, typedCollection } from "shared/config/firebase/firestore";

// type useSnapshotQueryProps<C extends keyof FirestoreSchema> =
//     | { ref: 'document', id: string, queryKey: string[], collectionName: C, }
//     | { ref: 'query', constraints: QueryConstraint[], queryKey: string[], collectionName: C, }

// type SnapshotData<C extends keyof FirestoreSchema> =
//     | FirestoreDoc<FirestoreSchema[C]>
//     | FirestoreDoc<FirestoreSchema[C]>[]

// // type DocumentResult<C extends keyof FirestoreSchema> = FirestoreSchema[C] & {id: string}
// // type QueryResult<C extends keyof FirestoreSchema> =  FirestoreSchema[C] & {id: string}[]

// export const useSnapshotQuery = <C extends keyof FirestoreSchema>(props: useSnapshotQueryProps<C>) => {
//     const { queryKey, ref, collectionName } = props
//     let constraints: QueryConstraint[] | undefined
//     let id: string | undefined
//     if (ref === 'query') {
//         constraints = props.constraints
//     }
//     if (ref === 'document') {
//         id = props.id
//     }
//     const queryClient = useQueryClient()
//     const [isLoading, setIsLoading] = useState<boolean>(false)
//     const resolveRef = useRef<(data: DocumentResult<C> | QueryResult<C>) => void>(null);

//     const isEnabled =
//         (
//             (ref === 'query' && !!constraints?.length) ||
//             (ref === 'document' && !!id)
//         )

//     const dataPromise = useMemo(() => {
//         return new Promise<DocumentResult<C> | QueryResult<C>>((resolve) => {
//             resolveRef.current = resolve
//         })
//     }, [queryKey])
//     const handleDocumentSnapshot = (snapshot: DocumentSnapshot<FirestoreSchema[C]>) => {
//         let data: DocumentResult<C>


//         if (snapshot instanceof DocumentSnapshot) {
//             const docSnap = snapshot.data()
//             if (!docSnap) throw new Error('no document')
//             data = {
//                 id: snapshot.id,
//                 ...docSnap
//             }
//             if (resolveRef.current) {
//                 resolveRef.current(data)
//             }
//             queryClient.setQueryData(queryKey, data)
//         }

//     }
//     const handleQuerySnapshot = (snapshot: QuerySnapshot<FirestoreSchema[C]>) => {
//         let data: QueryResult<C>
//         if ('docs' in snapshot) {
//             data = snapshot.docs.map((doc) => (
//                 {
//                     id: doc.id,
//                     ...doc.data()
//                 }))
//             setIsLoading(false)
//             if (resolveRef.current) {
//                 resolveRef.current(data)
//             }
//             queryClient.setQueryData(queryKey, data)
//         }
//     }


//     useEffect(() => {
//         if (!isEnabled) return
//         if (ref == 'query' && constraints && isLoading === false) {

//             listenByQuery(collectionName, constraints, (snapsot) => {
//                 handleQuerySnapshot(snapsot)
//             })
//             setIsLoading(true)

//         } else {
//             if (ref == 'document' && id) {

//                 listenById(collectionName, id, (snapsot) => {
//                     handleDocumentSnapshot(snapsot)
//                 })
//             }
//         }

//     }, [ref, isEnabled, id, collectionName, constraints]);
//     return useQuery({
//         queryKey,
//         queryFn: () => dataPromise,
//         enabled: isEnabled,

//     })
// }

