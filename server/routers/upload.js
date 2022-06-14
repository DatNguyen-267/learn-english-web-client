import express from "express"
import auth from "../middlewares/auth.js"
import { uploadAvatar } from "../controllers/UploadController.js"
import uploadImage from "../middlewares/uploadImage.js"


const router = express.Router()

router.post('/upload_avatar',uploadImage, auth, uploadAvatar) 

export default router