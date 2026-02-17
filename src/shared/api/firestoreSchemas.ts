import { ImageMeta } from "entities/Task";
import { Timestamp } from "firebase/firestore";

export interface FirestoreDoc<T> {
    id: string,
    data: T
}
export interface UserDoc {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    emailVerified: boolean
}

export interface BoardDoc {
    boardName: string | null,
    ownerId: string
    members: string[],
    createdAt: string | null,
}
export interface ColumnDoc {
    boardId: string,
    title: string | null,
    order: number,
}

export interface TaskDoc {
    boardId: string,
    columnId: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: Timestamp,
    completed: boolean;
    assets: ImageMeta[]
}
// export interface TaskAssetDoc {
//     url: string
//     publicId: string
//     width: number
//     height: number
//     format: string
// }

export interface FirestoreSchema {
    users: UserDoc,
    boards: BoardDoc,
    columns: ColumnDoc,
    tasks: TaskDoc,

}