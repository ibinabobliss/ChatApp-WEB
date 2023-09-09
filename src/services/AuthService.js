// authService.js

import jwt from "jsonwebtoken";

const secretKey = "08122787682";

const AuthService = {
  createToken: (payload) => {
    // Create and return a JWT
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
  },

  verifyToken: (token) => {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      console.error("JWT verification failed:", error);
      return null;
    }
  },

  // Additional functions for managing tokens (e.g., storing in localStorage).
};

export default AuthService;
