import User from "../models/user.js"
import bcrypt from "bcrypt"
const login = async (data) => {
    const user = await User.findOne({ email: data?.email })
    if (!user) throw new Error("User not found.");
    const isPasswordMatched= bcrypt.compareSync(data?.password,user?.password)
    if (!isPasswordMatched)  throw new Error("Password do not matched.") 
        
    
    return user
}
const register = async (data) => {
    const user = await User.findOne({ email: data?.email })
    if (user) throw new Error("User already exist.");
    const hashedPasword= bcrypt.hashSync(data?.password,10)

    return await User.create({
        username:data?.username,
        email:data?.email,
        password:hashedPasword,
        number:data?.number
    })

}
export default { login, register }