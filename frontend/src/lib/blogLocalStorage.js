// Simple blog storage using localStorage
const STORAGE_KEY = "digilynk_blogs";

export const blogStorage = {
  // Get all blogs
  getBlogs: () => {
    const blogs = localStorage.getItem(STORAGE_KEY);
    return blogs ? JSON.parse(blogs) : [];
  },

  // Get single blog by id
  getBlog: (id) => {
    const blogs = blogStorage.getBlogs();
    return blogs.find((blog) => blog.id === id);
  },

  // Save blog
  saveBlog: (blog) => {
    const blogs = blogStorage.getBlogs();
    const existingIndex = blogs.findIndex((b) => b.id === blog.id);

    if (existingIndex >= 0) {
      blogs[existingIndex] = blog;
    } else {
      blogs.unshift(blog);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
    return blog;
  },

  // Delete blog
  deleteBlog: (id) => {
    const blogs = blogStorage.getBlogs();
    const filtered = blogs.filter((blog) => blog.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  // Generate markdown file content
  generateMarkdown: (blog) => {
    return `---
title: "${blog.title}"
description: "${blog.description}"
coverImage: "${blog.coverImage}"
readTime: "${blog.readTime}"
date: "${blog.datePublished}"
featured: ${blog.featured}
tags: [${blog.tags.map((t) => `"${t}"`).join(", ")}]
---

${blog.content}
`;
  },

  // Download blog as markdown file
  downloadAsMarkdown: (blog) => {
    const markdown = blogStorage.generateMarkdown(blog);
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    // Use blog ID for filename to make it consistent
    const filename =
      blog.id ||
      blog.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    a.download = `${filename}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Log instructions for the user
    console.log(`\n✅ Blog downloaded as ${filename}.md`);
    console.log(`📁 Next steps:`);
    console.log(`1. Move ${filename}.md to frontend/public/blogs/`);
    console.log(`2. Add "${filename}.md" to frontend/public/blogs/blogs.json`);
    console.log(`3. Commit and push to Git\n`);
  },
};
