import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contactRoutes.js";

// Temporary in-memory blog storage (no database needed for testing)
let blogsStore = [];

const app = express();

// Middlewares
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Routes
app.use("/api/contact", contactRoutes);

// Temporary blog routes (in-memory, no database)
app.get("/api/blog", (req, res) => {
  res.json({
    success: true,
    count: blogsStore.length,
    data: blogsStore,
  });
});

app.get("/api/blog/:id", (req, res) => {
  const blog = blogsStore.find((b) => b._id === req.params.id);
  if (!blog) {
    return res.status(404).json({ success: false, error: "Blog not found" });
  }
  blog.views += 1;
  res.json({ success: true, data: blog });
});

app.post("/api/blog/admin/create", (req, res) => {
  const newBlog = {
    ...req.body,
    _id: Date.now().toString(),
    slug: req.body.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-"),
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  blogsStore.unshift(newBlog);
  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    data: newBlog,
  });
});

app.put("/api/blog/admin/:id", (req, res) => {
  const index = blogsStore.findIndex((b) => b._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, error: "Blog not found" });
  }
  blogsStore[index] = {
    ...blogsStore[index],
    ...req.body,
    updatedAt: new Date(),
  };
  res.json({
    success: true,
    message: "Blog updated successfully",
    data: blogsStore[index],
  });
});

app.delete("/api/blog/admin/:id", (req, res) => {
  const index = blogsStore.findIndex((b) => b._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, error: "Blog not found" });
  }
  blogsStore.splice(index, 1);
  res.json({ success: true, message: "Blog deleted successfully" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Temporary server running on port ${PORT}`);
  console.log(`🚀 Backend ready at http://localhost:${PORT}`);
  console.log(`📝 Blog API ready (in-memory storage)`);
  console.log(`⚠️  Note: Blogs will be lost when server restarts`);
});
