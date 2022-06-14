import express from "express"
import { activateEmail, checkLogin, forgotPassword, getAccessToken, getUser, getUserInfor, login, logout, register, resetPassword, updateUser } from "../controllers/UserController.js"
import auth from './../middlewares/auth.js'

const router = express.Router()

router.get('/infor',auth, getUserInfor) 
router.get('/logout', logout) 
router.get('/', getUser) 
router.get('/checkLogin',auth, checkLogin)
router.get('/refresh_token', getAccessToken)
router.post('/register', register)
router.post('/activation', activateEmail)
router.post('/forgot', forgotPassword)
router.post('/reset',auth, resetPassword)
router.put('/update',auth, updateUser)
router.post('/login', login)
export default router