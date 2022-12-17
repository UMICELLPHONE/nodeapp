import express from "express"
import { createBlog, deleteBLog, getAllBlogs, getBlog, updatedBLog } from "../controllers/BlogController.js"
const router = express.Router()

router.get("/", getAllBlogs)
router.get("/:id", getBlog)
router.post("/", createBlog)
router.put("/:id", updatedBLog)
router.delete("/:id", deleteBLog)

export default router