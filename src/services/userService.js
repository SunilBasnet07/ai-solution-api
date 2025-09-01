import User from "../models/user.js"

const createUser = async (data) => {
    return await User.create(data)
}
const getAllUsers = async () => {
    return await User.find()
}
const getUserById = async (id) => {
    return await User.findById(id)
}
const updateUser = async (id,data) => {
    return await User.findByIdAndUpdate(id,data)
}
export default { createUser,getAllUsers,getUserById,updateUser }