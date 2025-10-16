import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  adminLogin,
} from "../controllers/blogController.js";
import {
  authenticateAdmin,
  validateAdminLogin,
} from "../middlewares/adminAuth.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { blogSchema, updateBlogSchema } from "../schemas/blogSchema.js";

const router = express.Router();

// Public routes
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

// Admin login
router.post("/admin/login", validateAdminLogin, adminLogin);

// Admin routes (no authentication required)
router.post("/admin/create", validateRequest(blogSchema), createBlog);

router.put("/admin/:id", validateRequest(updateBlogSchema), updateBlog);

router.delete("/admin/:id", deleteBlog);

export default router;
