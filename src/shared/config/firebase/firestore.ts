import { doc, DocumentData, getFirestore, setDoc, WithFieldValue, addDoc, collection, updateDoc, getDoc, getDocs, onSnapshot, query, where, QueryFieldFilterConstraint, orderBy, QueryOrderByConstraint, limit, QueryLimitConstraint, QueryConstraint, QueryConstraintType, Query, DocumentReference, CollectionReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot, FirestoreDataConverter, Unsubscribe, UpdateData } from "firebase/firestore";
import { app } from "./app";
import { FirestoreDoc, type FirestoreSchema } from 'shared/api/firestoreSchemas'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { queryOptions } from "@tanstack/react-query";


export const db = getFirestore(app);
function converter<T>(): FirestoreDataConverter<T> {
  return {
    toFirestore: (data: T): DocumentData => data as DocumentData,
    fromFirestore: (snapshot: QueryDocumentSnapshot) => snapshot.data() as T
  }
}
export function typedCollection<C extends keyof FirestoreSchema>(collectionName: C): CollectionReference<FirestoreSchema[C]> {
  return collection(db, collectionName).withConverter(converter<FirestoreSchema[C]>())
}


function typedDoc<C extends keyof FirestoreSchema>(collection: C, id: string): DocumentReference<FirestoreSchema[C]> {
  return doc(db, collection, id).withConverter(converter<FirestoreSchema[C]>())
}
export function typedCollectionQuery<C extends keyof FirestoreSchema>(collectionName: C): Query<FirestoreSchema[C]> {
  return collection(db, collectionName).withConverter(converter<FirestoreSchema[C]>())
}

export const createDoc = async<C extends keyof FirestoreSchema>(collection: C, id: string, data: FirestoreSchema[C]): Promise<void> => {
  return await setDoc(firestoreRef(collection, id), data)
}

export const addDocAuto = async <C extends keyof FirestoreSchema>(collectionName: C, data: FirestoreSchema[C]): Promise<DocumentReference<FirestoreSchema[C]>> => {
  const col = typedCollection(collectionName)
  return addDoc(col, data)
  //DocumentReference а не  <FirestoreSchema[C]>
}
export const firestoreRef = <C extends keyof FirestoreSchema>(collectionName: C, id: string): DocumentReference<FirestoreSchema[C]> => {
  return doc(db, collectionName, id).withConverter(converter<FirestoreSchema[C]>())
}

export const updateDocById = async <C extends keyof FirestoreSchema>(collection: C, id: string, data: UpdateData<FirestoreSchema[C]>): Promise<void> => {
  const ref = firestoreRef(collection, id)
  updateDoc(ref, {
    ...data
  })
}

export const getDocById = async <C extends keyof FirestoreSchema>(collection: C, id: string): Promise<FirestoreDoc<FirestoreSchema[C]> | null> => {
  const docSnap = await getDoc(typedDoc(collection, id))
  if (!docSnap.exists()) {
    return null
  }
  return {
    id: docSnap.id,
    data: docSnap.data()
  }
}
export const getDocsByQuery = async <T>(query: Query<T>): Promise<FirestoreDoc<T>[]> => {
  const querySnapshot = await getDocs(query)
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    data: doc.data()
  }))
}
export const getDocsByCollection = async <C extends keyof FirestoreSchema>(collectionName: C): Promise<FirestoreDoc<FirestoreSchema[C]>[]> => {
  const querySnapshot = await getDocs(typedCollection(collectionName))
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    data: doc.data()
  }))
}
export const collectionRef = (collectionName: string) => {
  const ref = collection(db, collectionName)
  return ref
}
export const q = <C extends keyof FirestoreSchema>(collectionName: C, ...constraints: QueryConstraint[]): Query<FirestoreSchema[C]> => {
  return query(typedCollection(collectionName), ...constraints);
};

export const listenByQuery = <C extends keyof FirestoreSchema>(
  collectionName: C,
  constraints: QueryConstraint[],
  callback: (data: QuerySnapshot<FirestoreSchema[C]>) => void
): Unsubscribe => {
  const q = query(typedCollectionQuery(collectionName), ...constraints)
  return onSnapshot(q, (snapshot: QuerySnapshot<FirestoreSchema[C]>) => {
    callback(snapshot)
  })
}

export const listenById = <C extends keyof FirestoreSchema>(collectionName: C, id: string, callback: (data: DocumentSnapshot<FirestoreSchema[C]>) => void): Unsubscribe => {
  const ref = firestoreRef((collectionName), id)
  const unsub = onSnapshot(ref, (snapshot: DocumentSnapshot<FirestoreSchema[C]>) => {
    callback(snapshot)
  })
  return unsub
}

