import { Board, mapBoardDocToBoard, UpdateBoard } from "entities/Board"
import { mapColumnDocToColumn } from "entities/Column"
import { mapTaskDocToTask } from "entities/Task"
import { where } from "firebase/firestore"
import { getDocById, getDocsByQuery, listenById, q, updateDocById } from "shared/config/firebase/firestore"



export const getAllBoards = async (uid: string): Promise<Board[]> => {
  const query = q('boards', ...[where('ownerId', '==', uid)])
  const docs = await getDocsByQuery(query)
  return docs.map(({ id, data }) => mapBoardDocToBoard(id, data))
}
export const getBoard = (boardId: string) => {
  getDocById('boards', boardId,)
}

export const getColumns = async (boardId: string) => {
  const query = q('columns', ...[where('boardId', '==', boardId)])
  const docs = await getDocsByQuery(query)
  return docs.map(({ id, data }) => mapColumnDocToColumn(id, data))
}
export const getTasks = async (boardId: string) => {
  const query = q('tasks', ...[where('boardId', '==', boardId)])
  const docs = await getDocsByQuery(query)
  return docs.map(({ id, data }) => mapTaskDocToTask(id, data))
}

export const updateBoard = (id: string, data: UpdateBoard) => {
  return updateDocById('boards', id, data)
}

