import express from "express"
import { createUser } from "../controllers/userController.js"

const Router= express.Router()

Router.post("/",createUser)
export default Router