import Blog from "../models/blogModel.js";

// Get all published blogs
export async function getAllBlogs(req, res) {
  try {
    const { published = true, featured, limit, skip } = req.query;

    const query = {};
    if (published !== "all") {
      query.published = published === "true";
    }
    if (featured) {
      query.featured = featured === "true";
    }

    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit ? parseInt(limit) : 0)
      .skip(skip ? parseInt(skip) : 0)
      .select("-__v");

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    console.error("Get Blogs Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch blogs",
    });
  }
}

// Get single blog by ID or slug
export async function getBlogById(req, res) {
  try {
    const { id } = req.params;

    // Check if it's a MongoDB ObjectId or a slug
    const query = id.match(/^[0-9a-fA-F]{24}$/) ? { _id: id } : { slug: id };

    const blog = await Blog.findOne(query);

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    // Increment view count
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Get Blog Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch blog",
    });
  }
}

// Create new blog (admin only)
export async function createBlog(req, res) {
  try {
    const blog = new Blog(req.body);
    await blog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Create Blog Error:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: "A blog with this title already exists",
      });
    }

    res.status(500).json({
      success: false,
      error: "Failed to create blog",
      ...(process.env.NODE_ENV === "development" && {
        debug: error.message,
      }),
    });
  }
}

// Update blog (admin only)
export async function updateBlog(req, res) {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Update Blog Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to update blog",
    });
  }
}

// Delete blog (admin only)
export async function deleteBlog(req, res) {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Delete Blog Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to delete blog",
    });
  }
}

// Admin login
export async function adminLogin(req, res) {
  // Password is already validated by middleware
  res.status(200).json({
    success: true,
    message: "Login successful",
  });
}
