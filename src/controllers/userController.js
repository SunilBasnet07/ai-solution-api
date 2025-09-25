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
    const data = req.body;
    const id = req.params.id;
    try {
        const user = await userService.updateUser(id, data);
        res.json(user);
    } catch (error) {
        console.log(error.message)
    }
}
const updatePassword = async (req, res) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;
    const id = req.params.id;
    try {
        if (!confirmPassword) return res.status(428).send("Confirm Password is required.")
        if (!currentPassword) return res.status(428).send("Current Password is required.")
        if (!newPassword) return res.status(428).send("New Password is required.")
        if (newPassword !== confirmPassword) return res.status(428).send("Password do not match")
        const user = await userService.updatePassword(id, req.body);
        res.json(user);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message || "Something went wrong." });
    }
}
export { createUser, getAllUsers, getUserById, updateUser, updatePassword }