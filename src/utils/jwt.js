import jwt from "jsonwebtoken"
const createJwt = (data) => {
return jwt.sign(data, process.env.JWT_SECERET_KEY)
}

const verifyToken=async(token)=>{
  return await new Promise((reject,resolve)=>{
       jwt.verify(token, process.env.JWT_SECERET_KEY,(error,data)=>{
         if(error) return reject(error?.message)
            resolve(data)
   })
  })
}

export { createJwt,verifyToken }