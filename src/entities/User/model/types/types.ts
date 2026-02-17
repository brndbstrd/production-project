import { UserDoc } from "shared/api/firestoreSchemas";


export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  emailVerified: boolean
}


export interface UserSchema {
  user: User | null,
  isLoading: boolean,
  error: string | null
}

export const mapUserDocToUser = (uid: string, doc: UserDoc): User => ({
  uid,
  displayName: doc.displayName,
  email: doc.email,
  photoURL: doc.photoURL,
  emailVerified: doc.emailVerified
})

export const mapUserToUserDoc = (user: User): UserDoc => ({
  displayName: user.displayName,
  email: user.email,
  photoURL: user.photoURL,
  emailVerified: user.emailVerified

})
export type UserDb = Pick<User, 'uid' | 'displayName' | 'email' | 'photoURL' | 'emailVerified'>

export const userFields: (keyof User)[] = ["uid", "displayName", "email", "photoURL", "emailVerified"]