import { BoardDoc } from "shared/api/firestoreSchemas"

export interface Board {
    id: string,
    boardName: string | null,
    ownerId: string | null,
    members: string[] | null,
    createdAt: string | null,

}
export interface UpdateBoard {
    boardName?: string
    ownerId?: string
    members?: string[]
    createdAt?: string
}

export interface BoardSchema {
    data: Board | null
    isLoading: boolean
}

export const mapBoardDocToBoard = (id: string, data: BoardDoc): Board => ({
    id: id,
    boardName: data.boardName,
    ownerId: data.ownerId,
    members: data.members,
    createdAt: data.createdAt
})

export const mapBoardToBoardDoc = (data: BoardDoc): BoardDoc => ({
    boardName: data.boardName,
    ownerId: data.ownerId,
    members: data.members,
    createdAt: data.createdAt
})