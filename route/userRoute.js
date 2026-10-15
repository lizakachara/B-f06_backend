import express from "express"
import {addUser,getUser,getSingleUser,deleteUSer,login} from "../controller/userDataController.js"
import AuthanticateToken from '../utils/AuthMiddlware.js'

const router = express.Router()

router.post('/api/add-user',upload.single('image'),addUser)
router.get('/api/get-user',AuthanticateToken,getUser)
router.get('/api/get-singleuser/:uid',AuthanticateToken,getSingleUser)
router.delete('/api/delete-user/:uid',AuthanticateToken,deleteUSer)
router.post('/api/login',login)

export default router