import formatterUserData from "../helpers/FormatterData.js";
import authService from "../services/authService.js";
import { createJwt } from "../utils/jwt.js";

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email && !password) return res.status(428).send("Email and Password is required.")
        if (!email) return res.status(428).send("Email is required.")
        if (!password) return res.status(428).send("Password is required.")
        const data = await authService.login(req.body);


        const formattedData = formatterUserData(data);
        const token = createJwt(formattedData);
        res.cookie("authToken", token)
        res.json({ ...formattedData, token })

    } catch (error) {
        res.status(500).send(error.message);
    }
}
const register = async (req, res) => {
    const { email, password, username, confirmPassword, number } = req.body;

    try {
        if (!email && !password && !username && !confirmPassword && !number) return res.status(428).send("All Empty fields is required.")
        if (!email) return res.status(428).send("Email is required.")
        if (!username) return res.status(428).send("UserName is required.")
        if (!password) return res.status(428).send("Password is required.")
        if (!confirmPassword) return res.status(428).send("ConfirmPassword is required.")
        if (!number) return res.status(428).send("Number is required.")
        if (password !== confirmPassword) return res.status(428).send("Password do not matched.")

        const data = await authService.register(req.body);
        const formattedData = formatterUserData(data);
        const token = createJwt(formattedData);
        res.cookie("authToken", token)
        res.json({ ...formattedData, token })

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const forgotPassword = async (req, res) => {
    const data = req.body;
    try {
        const response = await authService.forgotPassword(data);
        res.json(response);
    } catch (error) {
        console.log(error?.message);
    }
}
const resetPassword = async (req, res) => {
    const { password, confirmPassword } = req.body;
    const id = req.params.id
    const token = req.query.token;
    try {
        if (!password) return res.status(428).send("Password is required.")
        if (!confirmPassword) return res.status(428).send("ConfirmPassword is required.")
        if (password !== confirmPassword) return res.status(428).send("Password do not matched.")
        const response = await authService.resetPassword(password, id, token);
        res.json(response);
    } catch (error) {
        console.log(error?.message);
    }
}
export { login, register, forgotPassword, resetPassword }