import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  Eye,
  Image as ImageIcon,
  Tag,
  Clock,
  User,
  Star,
} from "lucide-react";
import useBlogStore from "../lib/blogStore";
import BlogContent from "../components/BlogContent";

export default function BlogEditorPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const { createBlog, updateBlog, fetchBlog, currentBlog, clearCurrentBlog } =
    useBlogStore();

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    coverImage: "",
    readTime: "5 min read",
    author: "Digilynk Team",
    tags: [],
    published: true,
    featured: false,
  });

  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      loadBlog();
    }

    return () => clearCurrentBlog();
  }, [id]);

  const loadBlog = async () => {
    try {
      const blog = await fetchBlog(id);
      setFormData({
        title: blog.title || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        coverImage: blog.coverImage || "",
        readTime: blog.readTime || "5 min read",
        author: blog.author || "Digilynk Team",
        tags: blog.tags || [],
        published: blog.published ?? true,
        featured: blog.featured ?? false,
      });
    } catch (err) {
      setError("Failed to load blog");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isEditMode) {
        await updateBlog(id, formData);
      } else {
        await createBlog(formData);
      }

      navigate("/blog");
    } catch (err) {
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.details?.[0]?.message ||
        err.message ||
        "An error occurred";
      setError(
        `Failed to ${isEditMode ? "update" : "create"} blog: ${errorMessage}`
      );
      console.error("Submit error:", err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blogs</span>
          </button>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
            >
              <Eye className="w-4 h-4" />
              {preview ? "Edit" : "Preview"}
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {loading
                ? "Saving..."
                : isEditMode
                ? "Update Blog"
                : "Create Blog"}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {/* Editor or Preview */}
        {preview ? (
          <BlogPreview formData={formData} />
        ) : (
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                placeholder="Enter blog title..."
                required
              />
            </div>

            {/* Cover Image */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <ImageIcon className="w-4 h-4" />
                Cover Image URL *
              </label>
              <input
                type="url"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                placeholder="https://example.com/image.jpg"
                required
              />
              {formData.coverImage && (
                <img
                  src={formData.coverImage}
                  alt="Cover preview"
                  className="mt-3 w-full h-48 object-cover rounded-lg border border-zinc-800"
                />
              )}
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Excerpt *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                placeholder="Brief description of the blog..."
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content * (Markdown supported)
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={15}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-y font-mono text-sm"
                placeholder="Write your blog content here... You can use markdown formatting."
                required
              />
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Clock className="w-4 h-4" />
                  Read Time
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                  placeholder="5 min read"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4" />
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                  placeholder="Author name"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Tag className="w-4 h-4" />
                Tags
              </label>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                placeholder="Type a tag and press Enter..."
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-zinc-800 text-white rounded-full text-sm flex items-center gap-2"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-900"
                />
                <span className="text-sm">Published</span>
              </label>

              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-900"
                />
                <Star className="w-4 h-4" />
                <span className="text-sm">Featured</span>
              </label>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
}

// Preview Component
function BlogPreview({ formData }) {
  return (
    <motion.div
      className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Cover Image */}
      {formData.coverImage && (
        <div className="relative h-96">
          <img
            src={formData.coverImage}
            alt={formData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          {formData.title || "Untitled Blog"}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {formData.author}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {formData.readTime}
          </span>
          {formData.featured && (
            <span className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              Featured
            </span>
          )}
        </div>

        {formData.excerpt && (
          <p className="text-lg text-gray-300 mb-6 italic">
            {formData.excerpt}
          </p>
        )}

        <div className="max-w-none">
          {formData.content ? (
            <BlogContent content={formData.content} />
          ) : (
            <p className="text-gray-400 text-center py-12">No content yet...</p>
          )}
        </div>

        {formData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-zinc-800">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-zinc-800 text-white rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
