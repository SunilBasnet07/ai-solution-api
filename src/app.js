import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import userRoute from "./routes/userRoutes.js"
import contactRoute from "./routes/contactRoutes.js"
import chatboxRoute from "./routes/chatRoutes.js"
import authRoute from "./routes/authRoutes.js"
import blogRoute from "./routes/blogRoutes.js"
import logger from "./middlewares/logger.js";
import connectDB from "./config/database.js";
import multer from "multer"
import connectCloudinary from "./config/cloudinary.js";
import cors from 'cors'

dotenv.config();
const app = express({ silent: true })
const port = process.env.PORT;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(logger)
connectDB();
connectCloudinary();
app.use(cors())
const upload= multer()


app.get('/',(req, res) => {
    res.json({
        "name": "ai-solution-api",
        "version": "1.0.0",
        "author": "Sunil Basnet",
        "license": "ISC",
    })
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/contact",contactRoute);
app.use("/api/chatbox",chatboxRoute);
app.use("/api/blog",upload.single('image'),blogRoute);