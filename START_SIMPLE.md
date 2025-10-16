# 🚀 SIMPLE START GUIDE

## Step 1: Create `.env` File (ONE TIME SETUP)

1. Go to folder: `D:\DIGILYNK\digilynk\backend`
2. Create a file named `.env` (with the dot at the start)
3. Copy this into the file:

```
MONGO_URI=mongodb+srv://avidigilynk_db_user:YOUR_PASSWORD_HERE@cluster0.ymcrghr.mongodb.net/digilynk?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
NODE_ENV=development
```

4. **IMPORTANT:** Replace `YOUR_PASSWORD_HERE` with your actual MongoDB password

## Step 2: Start Backend

Open a terminal in `D:\DIGILYNK\digilynk\backend` and run:

```bash
npm run dev
```

You should see: `Server running on port 5000`

## Step 3: Start Frontend

Open ANOTHER terminal in `D:\DIGILYNK\digilynk\frontend` and run:

```bash
npm run dev
```

## Step 4: Create Blogs!

1. Go to http://localhost:5173/blog
2. Press `Ctrl + Shift + A`
3. Click the `+` button
4. Create your blog!

---

## ⚠️ If Backend Won't Start

**Problem:** "Cannot connect to MongoDB"

**Solution:** Your MongoDB password might be wrong. 

To get your password:
1. Go to MongoDB Atlas website
2. Go to "Database Access"
3. Click "Edit" on your user
4. Reset the password
5. Copy the NEW password
6. Update your `.env` file

---

## 📝 Quick Reference

**Backend folder:** `D:\DIGILYNK\digilynk\backend`
**Frontend folder:** `D:\DIGILYNK\digilynk\frontend`

**Start backend:** `npm run dev` (in backend folder)
**Start frontend:** `npm run dev` (in frontend folder)

**Secret key to show admin button:** `Ctrl + Shift + A`

