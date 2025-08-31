import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import userRoute from "./routes/userRoutes.js"

dotenv.config();
const app = express({ silent: true })
const port = process.env.PORT;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

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

app.use("/api/users",userRoute)