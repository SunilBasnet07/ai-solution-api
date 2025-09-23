import Blog from "../models/Blog.js";
import uploadCloudinaryFile from "../utils/cloudinary.js"

const uploadBlog=async(file,body)=>{
 
   const uploadedImage = await uploadCloudinaryFile(file);


 return await Blog.create({
    ...body,
   imageUrl:uploadedImage?.url
 })
}
const getAllBlogs=async()=>{
  return await Blog.find()
}
const deleteBlog=async(id)=>{
  return await Blog.findByIdAndDelete(id)
}
const updateBlog=async(id,data)=>{
  return await Blog.findByIdAndUpdate(id,data,{new:true})
}
export default {uploadBlog,getAllBlogs,deleteBlog,updateBlog}