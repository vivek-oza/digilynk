import dotenv from "dotenv";

dotenv.config();

export function authenticateAdmin(req, res, next) {
  const adminPassword = req.headers["x-admin-password"];

  if (!adminPassword) {
    return res.status(401).json({
      success: false,
      error: "Admin authentication required",
    });
  }

  // Simple password check - you can enhance this with JWT or sessions later
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(403).json({
      success: false,
      error: "Invalid admin credentials",
    });
  }

  next();
}

// Simple login endpoint validator
export function validateAdminLogin(req, res, next) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      success: false,
      error: "Password is required",
    });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({
      success: false,
      error: "Invalid password",
    });
  }

  next();
}
