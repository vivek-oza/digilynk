# Blog System - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Backend Configuration

```bash
# Navigate to backend
cd backend

# Create .env file
echo "PORT=5000" > .env
echo "NODE_ENV=development" >> .env
echo "MONGO_URI=your-mongodb-uri" >> .env
echo "ADMIN_PASSWORD=mysecretpassword" >> .env

# Start backend
npm run dev
```

### Step 2: Frontend Configuration

```bash
# Navigate to frontend (in a new terminal)
cd frontend

# Create .env file
echo "VITE_API_URL=http://localhost:5000" > .env

# Start frontend
npm run dev
```

### Step 3: Access Admin

1. Open `http://localhost:5173/blog`
2. Press: `Ctrl + Shift + A` (or `Cmd + Shift + A` on Mac)
3. Click the + button that appears
4. Login with your ADMIN_PASSWORD
5. Start creating blogs! 🎉

## 📝 Creating Your First Blog

1. **Title**: "Welcome to Digilynk Blog"
2. **Cover Image**: Use any URL from Unsplash.com
3. **Excerpt**: Write a brief 2-3 sentence description
4. **Content**: Write your blog content (markdown supported!)
5. **Read Time**: "5 min read"
6. **Tags**: Press Enter after each tag
7. Click **Preview** to see how it looks
8. Click **Create Blog** to publish

## 🔑 Secret Key Combinations

- **Show Admin Button**: `Ctrl + Shift + A`
- **Create New Blog**: Click + button (when logged in)
- **Logout**: Click red lock icon

## 💡 Pro Tips

- Use Unsplash.com for free, high-quality cover images
- Write excerpts that make people want to read more
- Preview before publishing
- Use tags to organize your content
- Uncheck "Published" to save as draft

## ⚡ Environment Variables Reference

### Backend (.env)
```
ADMIN_PASSWORD=yourpassword
MONGO_URI=mongodb://localhost:27017/digilynk
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## 🆘 Common Issues

**Admin button not showing?**
- Make sure you press Ctrl + Shift + A

**Can't login?**
- Check backend .env has ADMIN_PASSWORD set
- Verify backend is running

**Blogs not loading?**
- Ensure MongoDB is running
- Check backend console for errors

**Images not showing?**
- Verify image URLs are publicly accessible
- Try using Unsplash image URLs

## 📚 Full Documentation

See `BLOG_SYSTEM_README.md` for complete documentation.

