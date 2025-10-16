# Blog System Setup Instructions

## ⚡ Quick Setup

### 1. Backend Setup

1. Create a `.env` file in the `backend` directory with the following:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your-mongodb-connection-string
ADMIN_PASSWORD=your-secure-password-here
```

2. Start the backend:

```bash
cd backend
npm install
npm run dev
```

### 2. Frontend Setup

1. Create a `.env` file in the `frontend` directory with:

```env
VITE_API_URL=http://localhost:5000
```

2. Start the frontend:

```bash
cd frontend
npm install
npm run dev
```

## 🔑 Accessing Admin Features

### Reveal the Admin Button

1. Navigate to `http://localhost:5173/blog`
2. Press: **`Ctrl + Shift + A`** (Windows/Linux) or **`Cmd + Shift + A`** (Mac)
3. A floating action button will appear in the bottom-right corner

### Login

1. Click the floating `+` button
2. Enter your `ADMIN_PASSWORD` (from backend `.env`)
3. Click "Login"

### Once Logged In

You'll see:
- **+ Button**: Create new blog
- **Lock Button**: Logout
- **Edit/Delete Buttons**: On each blog card

## 📝 Creating a Blog

1. Click the `+` button
2. Fill in the form:
   - **Title**: Your blog title
   - **Cover Image URL**: Link to an image (try Unsplash.com)
   - **Excerpt**: Short description (20-500 chars)
   - **Content**: Main blog content (supports markdown)
   - **Read Time**: e.g., "5 min read"
   - **Author**: Defaults to "Digilynk Team"
   - **Tags**: Type and press Enter to add
   - **Published**: Check to make visible
   - **Featured**: Mark as featured
3. Click "Preview" to see how it looks
4. Click "Create Blog" to publish

## 🔧 Environment Variables

### Backend Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` or `production` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/digilynk` |
| `ADMIN_PASSWORD` | Admin password for blog management | `mySecurePass123` |
| `EMAIL_USER` | Email for contact form | `your-email@gmail.com` |
| `EMAIL_PASS` | Email password | Your app password |
| `RECIPIENT_EMAIL` | Where contact emails go | `contact@digilynk.com` |

### Frontend Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |

## 🚀 Deployment

### Backend Deployment (Render/Railway)

1. Add environment variables in your hosting platform
2. Make sure to set `ADMIN_PASSWORD` securely
3. Set `NODE_ENV=production`
4. Deploy

### Frontend Deployment (Vercel/Netlify)

1. Set `VITE_API_URL` to your production backend URL
2. Deploy

## 📚 API Endpoints

### Public Endpoints

```
GET  /api/blog              - Get all published blogs
GET  /api/blog/:id          - Get single blog (by ID or slug)
```

### Admin Endpoints (Requires `x-admin-password` header)

```
POST   /api/blog/admin/login     - Admin login
POST   /api/blog/admin/create    - Create new blog
PUT    /api/blog/admin/:id       - Update blog
DELETE /api/blog/admin/:id       - Delete blog
```

## 🎨 Features Implemented

✅ Hidden admin button (Ctrl+Shift+A)
✅ Password-protected admin access
✅ Rich blog editor with preview
✅ Image URL support
✅ Tag system
✅ Published/Featured flags
✅ View counter
✅ Markdown support
✅ Responsive design
✅ Blog CRUD operations
✅ API integration
✅ Loading states
✅ Error handling

## 🛠️ Tech Stack

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Zod validation
- Password-based auth

**Frontend:**
- React + Vite
- Zustand (state management)
- Tailwind CSS
- Framer Motion
- Axios

## 📖 Documentation

- Full Documentation: `BLOG_SYSTEM_README.md`
- Quick Start: `BLOG_QUICKSTART.md`

## 🆘 Troubleshooting

**Can't see admin button?**
- Press `Ctrl + Shift + A` (or Cmd + Shift + A on Mac)

**Can't login?**
- Check backend `.env` has `ADMIN_PASSWORD` set
- Verify backend is running on correct port
- Check browser console for errors

**Blogs not loading?**
- Ensure MongoDB is connected
- Check `VITE_API_URL` in frontend `.env`
- Verify backend is running

**Images not showing?**
- Use publicly accessible image URLs
- Try Unsplash.com for free images
- Check image URL in browser first

## 🔒 Security Notes

**Current Implementation:**
- Simple password authentication
- Password stored in localStorage for persistence
- Suitable for single admin use

**Production Recommendations:**
1. Use JWT tokens instead of password headers
2. Add session expiry
3. Use HTTPS only
4. Consider implementing rate limiting on admin routes
5. Add audit logging for admin actions

## 💡 Tips

1. **Images**: Use Unsplash.com or Cloudinary for reliable hosting
2. **Markdown**: Content field supports markdown for formatting
3. **Drafts**: Uncheck "Published" to save without publishing
4. **SEO**: Write descriptive excerpts for better discoverability
5. **Tags**: Keep tag names consistent (lowercase, hyphenated)

## 📞 Support

For issues or questions, refer to the documentation or check the browser console for detailed error messages.

---

**Built with ❤️ for Digilynk**

