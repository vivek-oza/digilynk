// Utility to load and parse markdown files from the public folder

/**
 * Parse frontmatter from markdown content
 * @param {string} content - Markdown content with frontmatter
 * @returns {object} - { metadata, content }
 */
function parseFrontmatter(content) {
  const frontmatterRegex =
    /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content };
  }

  const metadataStr = match[1];
  const body = match[2];

  // Parse YAML-like frontmatter
  const metadata = {};
  const lines = metadataStr.split("\n");

  lines.forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes
      value = value.replace(/^["']|["']$/g, "");

      // Parse arrays
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/^["']|["']$/g, ""));
      }

      // Parse boolean
      if (value === "true") value = true;
      if (value === "false") value = false;

      metadata[key] = value;
    }
  });

  return { metadata, content: body };
}

/**
 * Load a markdown file from the public folder
 * @param {string} filename - Name of the markdown file
 * @returns {Promise<object>} - Blog post object
 */
export async function loadMarkdownFile(filename) {
  try {
    const response = await fetch(`/blogs/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    const text = await response.text();
    const { metadata, content } = parseFrontmatter(text);

    return {
      id: filename.replace(".md", ""),
      slug: filename.replace(".md", ""),
      title: metadata.title || "Untitled",
      description: metadata.description || "",
      content: content,
      coverImage: metadata.coverImage || "",
      readTime: metadata.readTime || "5 min read",
      datePublished: metadata.date || new Date().toISOString().split("T")[0],
      tags: metadata.tags || [],
      featured: metadata.featured || false,
      // Mark this as a markdown file for handling
      isMarkdown: true,
    };
  } catch (error) {
    console.error(`Error loading markdown file ${filename}:`, error);
    return null;
  }
}

/**
 * Get list of markdown files from blogs.json manifest
 * This is more reliable than trying to list files dynamically
 */
export async function getMarkdownBlogs() {
  try {
    const response = await fetch("/blogs/blogs.json");
    if (!response.ok) {
      return [];
    }
    const manifest = await response.json();
    return manifest.posts;
  } catch (error) {
    console.error("Error loading blogs manifest:", error);
    return [];
  }
}

/**
 * Load all markdown blog posts
 * @returns {Promise<Array>} - Array of blog post objects
 */
export async function loadAllMarkdownBlogs() {
  try {
    const manifest = await getMarkdownBlogs();
    const blogs = await Promise.all(
      manifest.map((filename) => loadMarkdownFile(filename))
    );
    return blogs.filter((blog) => blog !== null);
  } catch (error) {
    console.error("Error loading markdown blogs:", error);
    return [];
  }
}

export default {
  loadMarkdownFile,
  getMarkdownBlogs,
  loadAllMarkdownBlogs,
  parseFrontmatter,
};
