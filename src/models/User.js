import mongoose from "mongoose"
import { USER } from "../constants/roles.js";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        //   unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        //   unique: true,
        lowercase: true,
    },
    number: {
        type: Number,
        required: true,
        //   unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    roles:{
        type:[String],
        default:[USER]
    }
})
const User = mongoose.model("User", userSchema)
export default User;