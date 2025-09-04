import { verifyToken } from "../utils/jwt.js";

const auth = (req, res, next) => {

    const authHeaders = req.headers.authorization;
    let authToken;
    if (authHeaders && authHeaders.startsWith("Bearer ")) {
         if (!authHeaders) return res.status(401).send("User Unauthorized")
        authToken = authHeaders.split(" ")[1]
    } else {
        const cookie = req.headers.cookie;
        if (!cookie) return res.status(401).send("User Unauthorized")
        authToken = cookie.split("=")[1]
    }
    verifyToken(authToken).then((data) => {
        req.user = data
        next()
    }).catch(() => {
        res.status(404).send("Invalid token.")
    })






}
export default auth