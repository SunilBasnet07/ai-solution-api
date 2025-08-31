import express from "express"

const Router= express.Router()

Router.post("/",(req,res)=>{
    const data= req.body;
    res.json(data);
})
export default Router