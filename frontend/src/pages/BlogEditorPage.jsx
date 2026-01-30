import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  Eye,
  Download,
  Image as ImageIcon,
  Tag,
  Clock,
  Calendar,
  Star,
  FileText,
} from "lucide-react";
import { blogStorage } from "../lib/blogLocalStorage";
import BlogContent from "../components/BlogContent";

export default function BlogEditorPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    title: "",
    description: "",
    content: "",
    coverImage: "",
    readTime: "5 min read",
    datePublished: new Date().toISOString().split("T")[0],
    tags: [],
    featured: false,
  });

  const [tagInput, setTagInput] = useState("");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      const blog = blogStorage.getBlog(id);
      if (blog) {
        setFormData(blog);
      }
    }
  }, [id, isEditMode]);

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

  const handlePublish = () => {
    blogStorage.saveBlog(formData);
    alert("Blog saved! It will appear on your blog page.");
    navigate("/blog");
  };

  const handleDownloadMarkdown = () => {
    blogStorage.downloadAsMarkdown(formData);
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
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
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download .md
            </button>
            <button
              onClick={handlePublish}
              className="flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
            >
              <Save className="w-4 h-4" />
              {isEditMode ? "Update" : "Publish"}
            </button>
          </div>
        </div>

        {/* Editor or Preview */}
        {preview ? (
          <BlogPreview formData={formData} />
        ) : (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Title */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <FileText className="w-4 h-4" />
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
                placeholder="https://images.unsplash.com/..."
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

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
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
                Blog Content * (Markdown supported)
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={20}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-y font-mono text-sm"
                placeholder="Write your blog content here... You can use markdown formatting."
                required
              />
              <div className="mt-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-200">
                <strong>Markdown Tips:</strong> Use # for H1, ## for H2, ### for
                H3, **bold**, *italic*, - for lists
              </div>
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <Calendar className="w-4 h-4" />
                  Date Published
                </label>
                <input
                  type="date"
                  name="datePublished"
                  value={formData.datePublished}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div className="flex items-center">
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer mt-6">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-zinc-700 bg-zinc-900"
                  />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">Featured Blog</span>
                </label>
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

            {/* Instructions */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-200 text-sm">
                <strong>💡 Tip:</strong> Click "Download .md" to get the
                markdown file, then commit it to your GitHub repo. Your blogs
                are also saved locally for easy editing.
              </p>
            </div>
          </motion.div>
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
        {formData.featured && (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm mb-4">
            <Star className="w-4 h-4 fill-current" />
            Featured
          </span>
        )}

        <h1 className="text-4xl font-bold text-white mb-4">
          {formData.title || "Untitled Blog"}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formData.datePublished}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {formData.readTime}
          </span>
        </div>

        {formData.description && (
          <p className="text-lg text-gray-300 mb-6 italic">
            {formData.description}
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
