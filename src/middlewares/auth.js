import { verifyToken } from "../utils/jwt";

const auth=(req,res,next)=>{
    const cookie = req.headers.cookie;
    if(!cookie) return res.status(401).send("User Unauthorized")
        const authToken= cookie.split("=")[1]
    verifyToken(authToken).then((data)=>{
       req.user=data
       next()
    }).catch(()=>{
         res.status(404).send("Invalid token.")
    })

}
export default auth