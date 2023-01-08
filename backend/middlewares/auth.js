const MyCustomError = require("../models/CustomError");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new MyCustomError("Authentication failed", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    console.log(token);
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = { name: payload.name, userId: payload.userId };
    next();
  } catch (error) {
    throw new MyCustomError('Authentication failed', 401)
  }
};

module.exports = auth;
