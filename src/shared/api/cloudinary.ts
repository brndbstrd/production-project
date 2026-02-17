import { ImageMeta } from "entities/Task"


const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dglfbebre'

export const uploadImage = async (file: File): Promise<ImageMeta> => {

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'imgpreset')
    formData.append('cloud_name', 'dglfbebre')

    const res = await fetch(CLOUDINARY_URL + '/image/upload', {
        method: 'POST',
        body: formData
    })

    const data: ImageMeta = await res.json()

    const imageMeta: ImageMeta = {
        url: data.url,
        public_id: data.public_id,
        width: data.width,
        height: data.height,
        format: data.format,
    };

    return imageMeta
}

export const deleteImage = async (deleteToken: string): Promise<void> => {
    try {
        await fetch(CLOUDINARY_URL + '/delete_by_token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: deleteToken
            })
        })

    } catch (error) {
        console.error('Error delete image', error)
    }
}