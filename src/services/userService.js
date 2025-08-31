import User from "../models/user.js"

const createUser = async (data) => {
    return await User.create(data)
}
export default { createUser }