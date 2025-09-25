import User from "../models/user.js"
import bcrypt from "bcrypt";
const createUser = async (data) => {
    return await User.create(data)
}
const getAllUsers = async () => {
    return await User.find()
}
const getUserById = async (id) => {
    return await User.findById(id)
}
const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data)
}
const updatePassword = async (id, body) => {
    const { currentPassword, newPassword } = body;
   
    const user = await User.findOne({ _id: id })
    const isMatch = await bcrypt.compare(currentPassword, user?.password);
    if (!isMatch) {
        throw {
            message: "Incorrect password. Please try again."
        }
    }

    const hashedPassword = bcrypt.hashSync(newPassword, 10)

     await User.findByIdAndUpdate(id, { password: hashedPassword },{new:true})
    return {message:"Password updated successfully!"}
}
export default { createUser, getAllUsers, getUserById, updateUser, updatePassword }