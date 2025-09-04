import blogServices from "../services/blogServices.js";

const uploadBlog=async(req,res)=>{
    const file = req.file;
   const data= req.body;
   await blogServices.uploadBlog(file);
}
export {uploadBlog}