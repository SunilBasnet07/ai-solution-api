import userService from "../services/userService.js";
const createUser = async (req, res) => {
    const data = req.body;
    try {
        const user = await userService.createUser(data);
        res.json(user);
    } catch (error) {
        console.log(error.message)
    }
}
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        console.log(error.message)
    }
}
const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userService.getUserById(id);
        res.json(user);
    } catch (error) {
        console.log(error.message)
    }
}
const updateUser = async (req, res) => {
    const data= req.body;
    const id = req.params.id;
    try {
        const user = await userService.updateUser(id,data);
        res.json(user);
    } catch (error) {
        console.log(error.message)
    }
}
export { createUser ,getAllUsers,getUserById,updateUser}