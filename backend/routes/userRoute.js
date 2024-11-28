// @ts-nocheck
import express from 'express'
import { allUsers, logout, signin, signup, updateUser, userDetails } from '../controllers/userController.js'
import authToken from '../middleware/authToken.js'



const userRouter = express.Router()
userRouter.post("/signup",signup)
userRouter.post("/signin",signin)
userRouter.get("/logout",logout)
userRouter.get("/user-details",authToken,userDetails)

//admin panel
userRouter.get("/all-user",authToken,allUsers)
userRouter.post("/update-user",authToken,updateUser)

export default userRouter