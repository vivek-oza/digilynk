# Quick Backend Setup

## The Issue

The backend server needs:
1. MongoDB connection string
2. Environment variables configured

## Quick Solution (2 Options)

### Option 1: Use MongoDB Atlas (Free Cloud Database) ⭐ RECOMMENDED

1. **Create free MongoDB account:**
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Sign up (it's free!)

2. **Get your connection string:**
   - Create a free cluster (M0)
   - Click "Connect" → "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

3. **Create `.env` file in the `backend` folder:**
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/digilynk?retryWrites=true&w=majority
   ```

4. **Start backend:**
   ```bash
   cd backend
   npm run dev
   ```

### Option 2: Use Local MongoDB

1. **Install MongoDB locally:**
   - Download from https://www.mongodb.com/try/download/community
   - Install and start MongoDB service

2. **Create `.env` file in the `backend` folder:**
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb://localhost:27017/digilynk
   ```

3. **Start backend:**
   ```bash
   cd backend
   npm run dev
   ```

## Quick Test Without Database (Temporary)

If you just want to test quickly without setting up database right now, I can modify the backend to work without MongoDB temporarily.

---

**Which option would you like to use?** 

Or shall I make a temporary version that doesn't need MongoDB?

