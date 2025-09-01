import express from "express"
import { createUser, getAllUsers, getUserById, updateUser } from "../controllers/userController.js"

const Router= express.Router()

Router.post("/",createUser)
Router.get("/",getAllUsers)
Router.get("/:id",getUserById)
Router.put("/:id",updateUser)
export default Router