import express from "express"
import { createUser, getAllUsers, getUserById, updatePassword, updateUser } from "../controllers/userController.js"
import auth from "../middlewares/auth.js"

const Router= express.Router()

Router.post("/",createUser)

Router.get("/",getAllUsers)
Router.get("/:id",getUserById)
Router.put("/:id",updateUser)
Router.put("/password/:id",auth,updatePassword)
export default Router