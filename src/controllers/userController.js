import userService from "../services/userService.js";
const createUser = async (req, res) => {
    const data = req.body;
    try {
        const user = await userService.createUser(data);
        console.log(user);
        res.json(user);
    } catch (error) {
        console.log(error.message)
    }
}
export { createUser }