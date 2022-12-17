import express from "express";
import {
    getPosts,
    getPostsById,
    createPosts,
    updatePosts,
    deletePosts
} from "../controllers/PostsController.js";

const router = express.Router();

router.get('/article/:limit/:offset', getPosts);
router.get('/article/:id', getPostsById);
router.post('/article', createPosts);
router.patch('/article/:id', updatePosts);
router.delete('/article/:id', deletePosts);

export default router;