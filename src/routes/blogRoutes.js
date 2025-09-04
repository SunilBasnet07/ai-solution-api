import express from 'express'
import { uploadBlog } from '../controllers/blogController.js';

const router = express.Router();

router.post('/',uploadBlog)

export default router;