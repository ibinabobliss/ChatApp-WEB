const jwt = require("jsonwebtoken");
const { secretKey, expiresIn } = require("./jwtConfig");

module.exports = {
  generateToken: (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn });
  },

  verifyToken: (token) => {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      return null; // Token is invalid or has expired
    }
  },
};
