import blogServices from "../services/blogServices.js";

const uploadBlog = async (req, res) => {
    const file = req.file;
    const data = req.body;
    try {
        // if(!data.title) return res.status(428).send("Title is required");
        // if(!data. description) return res.status(428).send("Description is required");
        // if(!data.category) return res.status(428).send("Category is required");
        // if(!data.author) return res.status(428).send("Author url is required");
        // if(!data. liveUrl) return res.status(428).send("liveurl is required");
        const article = await blogServices.uploadBlog(file, data);
        res.json(article)
    } catch (error) {
     console.log(error?.message)
    }
}
const getAllBlogs = async(req, res) => {
    try {

        const articles = await blogServices.getAllBlogs();
        res.json(articles)
    } catch (error) {
     console.log(error?.message)
    }
}
const deleteBlog = async(req, res) => {
    const id = req.params?.id
    console.log(id)
    try {

        await blogServices.deleteBlog(id);
        res.json("Blog deleted successfull.")
    } catch (error) {
     console.log(error?.message)
    }
}
const updateBlog = async(req, res) => {
    const id = req.params?.id
    const data = req.body;
  
    try {

        const updatedBlog=await blogServices.updateBlog(id,data);
        res.json(updatedBlog);
    } catch (error) {
     console.log(error?.message)
    }
}

export { uploadBlog,getAllBlogs,deleteBlog,updateBlog }