import uploadCloudinaryFile from "../utils/cloudinary.js"

const uploadBlog=async(file,body)=>{
   const uploadedImage = await uploadCloudinaryFile(file);
// console.log( JSON.stringify(uploadedImage))
console.log(uploadedImage?.url)
}
export default {uploadBlog}