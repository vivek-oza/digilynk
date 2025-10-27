# Blog Posts Folder

This folder contains your blog posts in Markdown format (.md files).

## IMPORTANT: Blog Files Location

Blog files should be placed in: **`frontend/public/blogs/`**

## How to Use

1. **Create a blog** using the editor at `/blog/new` (press Ctrl+Shift+A on the blog page to show the admin button)

2. **Download the markdown file** using the "Download .md" button in the editor

3. **Place the file** in `frontend/public/blogs/` folder

4. **Update the manifest**: Add the filename to `frontend/public/blogs/blogs.json`:
   ```json
   {
     "posts": ["your-blog-filename.md", "another-blog.md"]
   }
   ```

5. **Commit to Git** - The blog will automatically appear on your website after deployment

## File Format

Your markdown files should include frontmatter at the top:

```markdown
---
title: "Your Blog Title"
description: "A brief description"
coverImage: "https://..."
readTime: "5 min read"
date: "2025-01-15"
featured: false
tags: ["tag1", "tag2"]
---

# Your Blog Content Here

Markdown content goes here...
```

## Organization

- Place all blog .md files in the `frontend/public/blogs/` folder
- Update `frontend/public/blogs/blogs.json` with each new file
- Use descriptive filenames (e.g., `getting-started-with-react.md`)
- The files will be automatically loaded and displayed on your blog page

## Example

```
frontend/
  public/
    blogs/
      blogs.json
      my-first-blog.md
      my-second-blog.md
```

