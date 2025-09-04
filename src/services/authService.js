import Reset from "../models/reset.js";
import User from "../models/user.js"
import bcrypt from "bcrypt"
const login = async (data) => {
    const user = await User.findOne({ email: data?.email })
    if (!user) throw new Error("User not found.");
    const isPasswordMatched = bcrypt.compareSync(data?.password, user?.password)
    if (!isPasswordMatched) throw new Error("Password do not matched.")


    return user
}
const register = async (data) => {
    const user = await User.findOne({ email: data?.email })
    if (user) throw new Error("User already exist.");
    const hashedPasword = bcrypt.hashSync(data?.password, 10)

    return await User.create({
        username: data?.username,
        email: data?.email,
        password: hashedPasword,
        number: data?.number
    })

}
const forgotPassword = async (data) => {
    const user = await User.findOne({ email: data?.email })
    if (user?.email !== data?.email) throw new Error("User not found");

    const otp = Math.floor(Math.random() * 1000000);

    await Reset.create({
        userId: user._id,
        token: otp,
    })

    return { message: "Forgot password link sent to your email" }

}
const resetPassword = async (password, id, token) => {

    const data = await Reset.findOne({ userId: id })

    if (!data && data?.token !== token && data?.isUsed) {
        throw {
            statusCode: 404,
            message: "Invalid token"
        }
    }
    if (data.expireAt > Date.now()) {
        throw {
            statusCode: 404,
            message: "Token expired"
        }
    }

    const hashedPasword = bcrypt.hashSync(password, 10)
    await User.findByIdAndUpdate(data?.userId,{password: hashedPasword })

    await Reset.findByIdAndUpdate(data?._id,{
        isUsed: true
    })

    return { message: "Password reset successfully." }

}


export default { login, register, forgotPassword,resetPassword }