import jwt from "jsonwebtoken"
const createJwt = (data) => {
  return jwt.sign(data, process.env.JWT_SECERET_KEY)
}

const verifyToken = async (token) => {
  try {
    const user = await new Promise((resolve, reject) => {
      console.log(process.env.JWT_SECRET_KEY)
      jwt.verify(token, process.env.JWT_SECERET_KEY, (error, data) => {
        if (error) return reject(error?.message);
        return resolve(data);
      });
    });
    return user;
  } catch (err) {
    console.error("Token verification failed:", err);
    throw err; // rethrow for caller to handle
  }
};

export { createJwt, verifyToken }