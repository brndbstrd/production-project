import { ColumnDoc } from "shared/api/firestoreSchemas"

export interface Column {
    id: string,
    boardId: string
    title: string | null,
    order: number,
}


export const mapColumnToColumnDoc = (data: Column): ColumnDoc => ({
    boardId: data.boardId,
    title: data.title,
    order: data.order,
})


export const mapColumnDocToColumn = (id: string, data: ColumnDoc): Column => ({
    id: id,
    boardId: data.boardId,
    title: data.title,
    order: data.order
})