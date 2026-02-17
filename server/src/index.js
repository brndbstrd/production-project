import dotenv from 'dotenv'
import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin'
import { v2 as cloudinary } from 'cloudinary'
import express from 'express'
dotenv.config()

const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};
initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});
const db = admin.firestore()
const auth = admin.auth()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_KEY_SECRET,
    secure: true
})

const app = express()
app.use(express.json())


const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).send('Unauthorized: invalid token')
    }
    const idToken = authHeader.split('Bearer ')[1]
    try {
        const decodedToken = await auth.verifyIdToken(idToken)
        req.user = decodedToken
        next()
    } catch (error) {
        console.error('Token verify error', error)
        return res.status(401).send('Unauthorized: invalid token')
    }

}

app.patch('/tasks/:taskId/assets', authenticate, async (req, res) => {
    const taskId = req.params.taskId
    const { assets } = req.body

    if (!assets || !Array.isArray(assets) || assets.length === 0) {
        return res.status(400).json({ error: 'Array required' })
    }

    try {
        const taskRef = db.collection('tasks').doc(taskId)
        const taskSnap = await taskRef.get()
        if (!taskSnap.exists) {
            return res.status(404).json({ error: 'Task not found' })

        }

        const taskData = taskSnap.data()
        const boardRef = db.collection('boards').doc(taskData.boardId)
        const boardSnap = await boardRef.get()
        const boardData = boardSnap.data()

        const currentUserId = req.user.uid
        if (!boardData.members.includes(currentUserId)) {
            return res.status(403).json({
                error: 'You are not a member of this board'
            })
        }

        await taskRef.update({
            assets: admin.firestore.FieldValue.arrayUnion(...assets)
        })
        res.status(200).json({
            message: 'Image added'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to add image' })
    }

})

const PORT = 3000
app.listen(PORT, () => {
    console.log('the server is running')
})