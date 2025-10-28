import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { Clock, ArrowRight, Plus, Edit, Trash2 } from "lucide-react";
import { blogStorage } from "../lib/blogLocalStorage";
import { loadAllMarkdownBlogs } from "../lib/blogMarkdownLoader";

// Hardcoded default blogs
const defaultBlogs = [
  {
    id: "1",
    title: "Top 5 Reasons Every Small Business Needs a Website in 2025",
    coverImage:
      "https://images.unsplash.com/photo-1614854262178-03c96e9c8c28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    readTime: "4 min read",
    description:
      "Discover why having a website is essential for business growth in 2025.",
    datePublished: "2025-01-15",
  },
  {
    id: "2",
    title: "How Custom Web Development Can Boost Your Brand Credibility",
    coverImage:
      "https://images.unsplash.com/photo-1614854262178-03c96e9c8c28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    readTime: "6 min read",
    description:
      "Learn how custom development sets you apart from the competition.",
    datePublished: "2025-01-10",
  },
];

export default function BlogListPage() {
  const navigate = useNavigate();
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [blogs, setBlogs] = useState([]);

  // Load blogs from markdown files, localStorage, and defaults
  useEffect(() => {
    const loadAllBlogs = async () => {
      const savedBlogs = blogStorage.getBlogs();
      const markdownBlogs = await loadAllMarkdownBlogs();
      // Combine: saved blogs (highest priority), markdown blogs, then defaults
      const allBlogs = [...savedBlogs, ...markdownBlogs, ...defaultBlogs];
      setBlogs(allBlogs);
    };

    loadAllBlogs();
  }, []);

  // Secret key combination: Press Ctrl + Shift + A to show admin button
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        e.preventDefault();
        setShowAdminButton(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleDeleteBlog = (blogId, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this blog?")) {
      blogStorage.deleteBlog(blogId);
      const savedBlogs = blogStorage.getBlogs();
      const allBlogs = [...savedBlogs, ...defaultBlogs];
      setBlogs(allBlogs);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <SEO
        title="Latest from Digilynk | Web Development & Technology Insights"
        description="Stay updated with latest tech insights"
        path="/blog"
      />

      <div className="pt-16 min-h-screen bg-black relative">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden h-screen flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg')`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 font-roboto"
              variants={fadeInUp}
            >
              Latest from Digilynk
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              Stay updated with latest tech insights
            </motion.p>
          </div>
        </motion.div>

        {/* Floating Admin Button */}
        {showAdminButton && (
          <motion.div
            className="fixed bottom-8 right-8 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <button
              onClick={() => navigate("/blog/new")}
              className="p-4 bg-white text-black rounded-full shadow-2xl hover:bg-gray-200 transition-all duration-300 hover:scale-110"
              title="Create New Blog"
            >
              <Plus className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        {/* Blog Cards Section */}
        <motion.div
          className="relative bg-black py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
            >
              {blogs.map((blog) => (
                <motion.article
                  key={blog.id}
                  className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  {/* Admin Actions */}
                  {showAdminButton &&
                    !defaultBlogs.find((b) => b.id === blog.id) && (
                      <div className="absolute top-3 right-3 z-10 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/blog/edit/${blog.id}`);
                          }}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => handleDeleteBlog(blog.id, e)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.coverImage || blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 font-roboto group-hover:text-white transition-colors">
                      {blog.title}
                    </h3>

                    {/* Read Time */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="max-w-4xl mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 rounded-2xl p-8 md:p-12 border border-zinc-800 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-roboto">
              Stay in the Loop
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-roboto">
              Be the first to know when we publish new insights on web
              development, software testing, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
              />
              <button className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
