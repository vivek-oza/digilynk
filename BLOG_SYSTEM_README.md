# Blog Management System Documentation

## Overview

The Digilynk website now includes a complete blog management system with admin authentication. This allows you to create, edit, and delete blog posts through an intuitive web interface.

## Features

- ✨ **Hidden Admin Access**: Secret key combination to reveal admin controls
- 🔐 **Password Protection**: Simple but secure admin authentication
- 📝 **Rich Blog Editor**: Create blogs with images, formatting, and metadata
- 🏷️ **Tag System**: Organize blogs with custom tags
- 👁️ **Preview Mode**: See how your blog will look before publishing
- 📊 **View Counter**: Track blog engagement
- 🎯 **Featured Blogs**: Mark important blogs as featured
- 📱 **Responsive Design**: Works beautifully on all devices

## Getting Started

### Backend Setup

1. **Configure Environment Variables**

   Create a `.env` file in the `backend` directory:

   ```bash
   cd backend
   cp .env.example .env
   ```

   Edit `.env` and set your admin password:

   ```
   ADMIN_PASSWORD=YourSecurePasswordHere
   ```

2. **Start the Backend**

   ```bash
   cd backend
   npm install
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Configure Environment Variables**

   Create a `.env` file in the `frontend` directory:

   ```bash
   cd frontend
   cp .env.example .env
   ```

   For local development, the default should work:

   ```
   VITE_API_URL=http://localhost:5000
   ```

2. **Start the Frontend**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## Using the Blog System

### Accessing Admin Mode

1. **Navigate to the Blog Page**
   
   Go to `http://localhost:5173/blog`

2. **Reveal Admin Button**
   
   Press the secret key combination:
   - Windows/Linux: `Ctrl + Shift + A`
   - Mac: `Cmd + Shift + A`

   A floating action button (FAB) will appear in the bottom-right corner.

3. **Login**
   
   - Click the floating button
   - Enter your admin password (set in backend `.env`)
   - Click "Login"

### Creating a New Blog

1. After logging in, click the `+` button
2. Fill in the blog details:
   - **Title**: Your blog title (required)
   - **Cover Image URL**: A URL to the main image (required)
   - **Excerpt**: Short description (required)
   - **Content**: Main blog content with markdown support (required)
   - **Read Time**: Estimated reading time (e.g., "5 min read")
   - **Author**: Author name (defaults to "Digilynk Team")
   - **Tags**: Add tags by typing and pressing Enter
   - **Published**: Check to make blog visible to public
   - **Featured**: Check to mark as featured blog

3. Click "Preview" to see how it looks
4. Click "Create Blog" to publish

### Editing a Blog

1. While logged in, navigate to the blog list
2. Each blog card will show Edit (blue) and Delete (red) buttons
3. Click the Edit button
4. Make your changes
5. Click "Update Blog"

### Deleting a Blog

1. While logged in, click the Delete (trash) button on any blog
2. Confirm the deletion

### Logging Out

Click the red lock icon in the bottom-right corner to logout.

## API Endpoints

### Public Endpoints

```
GET  /api/blog                    Get all published blogs
GET  /api/blog/:id                Get single blog (by ID or slug)
```

### Admin Endpoints (Require Authentication)

```
POST   /api/blog/admin/login      Admin login
POST   /api/blog/admin/create     Create new blog
PUT    /api/blog/admin/:id        Update blog
DELETE /api/blog/admin/:id        Delete blog
```

### Authentication Header

Admin requests require the following header:

```
x-admin-password: YourAdminPassword
```

## Database Schema

### Blog Model

```javascript
{
  title: String,           // Required, max 200 chars
  slug: String,            // Auto-generated from title
  excerpt: String,         // Required, max 500 chars
  content: String,         // Required, markdown supported
  coverImage: String,      // Required, URL
  readTime: String,        // Default: "5 min read"
  author: String,          // Default: "Digilynk Team"
  tags: [String],          // Array of tags
  published: Boolean,      // Default: true
  featured: Boolean,       // Default: false
  views: Number,           // Auto-incremented
  createdAt: Date,         // Auto-generated
  updatedAt: Date          // Auto-generated
}
```

## Security Considerations

### Current Implementation

- Password-based authentication
- Password stored in localStorage (for convenience)
- HTTPS recommended for production

### Recommended Enhancements (Future)

1. **JWT Tokens**: Replace password header with JWT
2. **Session Management**: Add session expiry
3. **Rate Limiting**: Already implemented for general routes
4. **HTTPS Only**: Enforce in production
5. **Password Hashing**: Hash passwords in database
6. **2FA**: Add two-factor authentication
7. **Admin Users**: Multiple admin accounts with different permissions

## Deployment

### Backend (Render/Railway/Heroku)

1. Set environment variables in your hosting platform
2. Ensure `ADMIN_PASSWORD` is set securely
3. Set `NODE_ENV=production`
4. Deploy as usual

### Frontend (Vercel/Netlify)

1. Set `VITE_API_URL` to your backend URL
2. Build and deploy

## Troubleshooting

### Admin button not appearing

- Make sure you're pressing the correct key combination: `Ctrl + Shift + A`
- Check browser console for any errors

### Cannot login

- Verify `ADMIN_PASSWORD` is set in backend `.env`
- Check that backend is running
- Verify `VITE_API_URL` points to the correct backend URL

### Blogs not loading

- Check browser console for CORS errors
- Verify backend is running
- Ensure MongoDB is connected
- Check network tab for API responses

### Images not displaying

- Verify image URLs are valid and accessible
- Check that images support CORS if hosted elsewhere
- Consider using a CDN like Cloudinary or Imgur

## Tips & Best Practices

1. **Image URLs**: Use reliable image hosting services (Unsplash, Cloudinary, Imgur)
2. **Markdown**: Content supports markdown for better formatting
3. **SEO**: Write descriptive excerpts for better search visibility
4. **Tags**: Use consistent tag naming for better organization
5. **Read Time**: Calculate approximately 200 words per minute
6. **Featured**: Use sparingly to highlight your best content
7. **Drafts**: Uncheck "Published" to save as draft

## Future Enhancements

- [ ] Rich text WYSIWYG editor (TinyMCE, Quill)
- [ ] Image upload functionality
- [ ] Drag-and-drop image upload
- [ ] Categories system
- [ ] Comments section
- [ ] Social sharing
- [ ] Blog analytics dashboard
- [ ] SEO optimization tools
- [ ] Related posts suggestions
- [ ] Search functionality
- [ ] Blog series/collections

## Support

For issues or questions, contact the development team or create an issue in the repository.

## License

This blog system is part of the Digilynk website project.

