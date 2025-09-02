import express from "express"
import { forgotPassword, login, register, resetPassword } from "../controllers/authController.js";

const Router = express.Router();

Router.post('/login',login)
Router.post('/register',register)
Router.post('/forgot-password',forgotPassword)
Router.post('/reset-password/:id',resetPassword)

export default Router;