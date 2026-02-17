import { Timestamp } from "firebase/firestore";
import { TaskDoc } from "shared/api/firestoreSchemas";

export interface Task {
    id: string,
    boardId: string,
    columnId: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: Timestamp,
    completed: boolean;
    assets: ImageMeta[]
}
export interface ImageMeta {
    url: string
    public_id: string
    width: number
    height: number
    format: string
}


export const mapTaskToTaskDoc = (data: Task): TaskDoc => ({
    boardId: data.boardId,
    columnId: data.columnId,
    title: data.title,
    description: data.description,
    order: data.order,
    createdAt: data.createdAt,
    completed: data.completed,
    assets: [...data.assets]
})

export const mapTaskDocToTask = (id: string, data: TaskDoc): Task => ({
    id: id,
    boardId: data.boardId,
    columnId: data.columnId,
    title: data.title,
    description: data.description,
    order: data.order,
    createdAt: data.createdAt,
    completed: data.completed,
    assets: [...data.assets]
})