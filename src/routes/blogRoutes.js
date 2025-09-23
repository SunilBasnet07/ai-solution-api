import express from 'express'
import { deleteBlog, getAllBlogs, updateBlog, uploadBlog } from '../controllers/blogController.js';

const router = express.Router();

router.post('/',uploadBlog)
router.get('/',getAllBlogs)
router.delete('/:id',deleteBlog)
router.put('/:id',updateBlog)

export default router;