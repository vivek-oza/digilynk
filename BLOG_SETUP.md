# Blog Setup Guide

Your blog system is now set up to load Markdown (.md) files from the `frontend/public/blogs/` folder in real-time.

## 📁 Folder Structure

```
frontend/
  public/
    blogs/
      blogs.json         # Manifest file listing all blog posts
      example-blog.md    # Example blog (can delete this)
      your-blog-1.md     # Your actual blog posts
      your-blog-2.md
```

## 🚀 How to Add a New Blog

### Option 1: Using the Built-in Editor (Recommended)

1. Go to your blog page: `http://localhost:5173/blog` (or your deployed URL)
2. Press **Ctrl + Shift + A** to reveal the admin button
3. Click the **+** button to create a new blog
4. Fill in all the fields (title, description, content, cover image, etc.)
5. Click **"Preview"** to see how it looks
6. Click **"Download .md"** to download the markdown file
7. Move the downloaded file to `frontend/public/blogs/`
8. Update `frontend/public/blogs/blogs.json` to include the filename:

```json
{
  "posts": ["example-blog.md", "your-new-blog.md"]
}
```

9. Commit and push to Git
10. Your blog will appear on the website!

### Option 2: Create Manually

1. Create a new `.md` file in `frontend/public/blogs/`
2. Use this format:

```markdown
---
title: "Your Blog Title"
description: "A brief description"
coverImage: "https://..."
readTime: "5 min read"
date: "2025-01-20"
featured: false
tags: ["tag1", "tag2"]
---

# Your Blog Content

Write your markdown content here...

## Sections

You can use headers, **bold**, *italic*, lists, etc.

### Code Blocks

```javascript
const example = "Your code here";
```
```

3. Add the filename to `frontend/public/blogs/blogs.json`
4. Commit and push

## 🔄 Blog Loading Priority

Blogs are loaded in this order (first match wins):
1. **LocalStorage** - Blogs saved via the editor (stored in browser)
2. **Markdown Files** - Files in `frontend/public/blogs/`
3. **Default Blogs** - Hardcoded example blogs

## 📝 Blog Metadata

Frontmatter fields in your .md files:

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Blog title |
| `description` | Recommended | Brief description |
| `coverImage` | Yes | Image URL |
| `readTime` | No | e.g., "5 min read" (default: "5 min read") |
| `date` | Recommended | Publication date (YYYY-MM-DD) |
| `featured` | No | true/false for featured blogs |
| `tags` | No | Array of tags |

## 🎨 Markdown Support

Your blog content supports full Markdown:

- **Headers**: `# H1`, `## H2`, `### H3`, etc.
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Lists**: `- item` or `1. item`
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Code**: Inline `code` or blocks
- **Blockquotes**: `> quote`
- **And more!**

## 🔧 Technical Details

- **Location**: `frontend/public/blogs/`
- **Manifest**: `blogs.json` - lists all available posts
- **Loader**: `frontend/src/lib/blogMarkdownLoader.js`
- **Rendering**: Uses ReactMarkdown with custom components

## ✅ Next Steps

1. Delete the example blog if you don't need it:
   - Remove `example-blog.md` from `blogs/` folder
   - Remove `"example-blog.md"` from `blogs.json`

2. Start adding your own blogs!

3. When you commit and push, your blogs will be live on your website.

## 💡 Tips

- Use descriptive filenames (e.g., `getting-started-with-react.md`)
- Keep your frontmatter properly formatted
- Use good images for cover images
- Add meaningful tags to help with organization
- Preview your markdown before committing

## 🐛 Troubleshooting

**Blog not showing up?**
- Check that the filename is in `blogs.json`
- Check browser console for errors
- Ensure the markdown file is in `frontend/public/blogs/`

**Format issues?**
- Validate your frontmatter syntax
- Check for missing required fields
- Look for syntax errors in markdown

