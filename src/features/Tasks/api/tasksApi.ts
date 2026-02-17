import { ImageMeta } from "entities/Task"
import { arrayUnion } from "firebase/firestore"
import { updateDocById } from "shared/config/firebase/firestore"


export const addImageTask = async (taskId: string, image: ImageMeta) => {
   await updateDocById('tasks', taskId, {
      assets: arrayUnion(image)
   }
   )
}