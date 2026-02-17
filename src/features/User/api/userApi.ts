import { mapUserToDb } from "entities/User";
import { mapUserDocToUser, mapUserToUserDoc, User, UserDb, userFields } from "entities/User/model/types/types"
import { UserDoc } from "shared/api/firestoreSchemas";
import { createDoc, getDocById, updateDocById } from "shared/config/firebase/firestore"

export const getUserByUid = async (uid: string, prevEtag?: string): Promise<User | null> => {
    const userDoc = await getDocById('users', uid);
    if (!userDoc) {
        return null
    }
    const mappedUser = mapUserDocToUser(uid, userDoc.data)
    return mappedUser
};

export const ensureUserExists = async (user: User): Promise<void> => {
    if (!user.uid) {
        return
    };
    console.log(user);
    const docSnap = await getDocById('users', user.uid);

    if (!docSnap) {

        await createDoc('users', user.uid, mapUserToUserDoc(user))
    }
}
export const updateUser = async (user: UserDoc, uid: string): Promise<void> => {
    updateDocById('users', uid, (user))
}
export const ensureUserUpdated = async (user: User): Promise<void> => {
    if (user && user.uid) {
        const userSnap = await getUserByUid(user?.uid)
        const isDifferent = userSnap
            ? userFields.some(key => user[key] !== userSnap[key])
            : false
        if (!isDifferent) return
        const parsedUser = mapUserToUserDoc(user)
        await updateUser(parsedUser, user?.uid)
    }
}