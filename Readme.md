# Digilynk Website

Welcome to the Digilynk project!  
This repository contains the codebase for our official web presence, built with a modern React frontend and a robust Express backend.

---

## Tech Stack

**Frontend**  
- React 18 (with hooks and functional components)
- Vite (blazing fast dev/build tool)
- Tailwind CSS (utility-first styling)
- Radix UI, Lucide, Tabler Icons (UI/UX enhancements)
- Zustand (state management)
- React Hook Form & Zod (forms & validation)
- Framer Motion (animations)
- Three.js & Drei (3D/visuals)
- Axios (API requests)
- ESLint, Prettier (code quality)

**Backend**  
- Node.js 18+
- Express 5
- MongoDB (via Mongoose)
- Zod (validation)
- Helmet, CORS, Express Rate Limit (security)
- Nodemailer (emails)
- dotenv (env config)
- Modern modular structure (controllers, routes, models, middlewares)

---

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Git
- MongoDB (local or Atlas connection string)

---

### 1. Clone the Repository

```sh
git clone https://github.com/vivek-oza/digilynk.git
cd digilynk
```

---

### 2. Install Dependencies

#### Frontend

```sh
cd frontend
npm install
# or
yarn install
```

#### Backend

```sh
cd ../backend
npm install
# or
yarn install
```

---

### 3. Environment Variables

- For the backend, create a `.env` file in `/backend` (ask in discord for the template or copy from `.env.example` if present, you can make your equivalent credentials if running locally, main credentials will be added to production backend).

---

### 4. Running the Project

#### Start Backend

```sh
cd backend
npm run dev
# or
yarn dev
```
- The backend runs at [http://localhost:5000](http://localhost:5000)

#### Start Frontend

Open a new terminal:

```sh
cd frontend
npm run dev
# or
yarn dev
```
- The frontend runs at [http://localhost:5173](http://localhost:5173)

---

## Project Structure
digilynk/
│
├── frontend/ # React + Vite + Tailwind app
│ └── src/
│
└── backend/ # Express + MongoDB API
├── controllers/
├── models/
├── routes/
└── ...

---

## Collaborator Workflow

Hey there, Here's how you can contribute:

1. **Pull the latest changes**  
   ```sh
   git pull origin main
   ```

2. **Create a new branch for your work**  
   ```sh
   git checkout -b your-feature-name
   ```

3. **Make your changes**  
   - Work in either `frontend/` or `backend/` as needed.

4. **Commit and push**  
   ```sh
   git add .
   git commit -m "Describe your changes"
   git push origin your-feature-name
   ```

5. **Open a pull request**  
   - Go to GitHub, compare & create a pull request to `main`.

6. **Review & merge**  
   - We'll review together and merge when ready!

---

## Notes

- This is a private repository for Digilynk use only.
- For any questions or to sync up, ping discord in server.

---

Let's build something awesome! 🚀

