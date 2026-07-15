const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const service = require("../services/userService");
const authenticate = require("../middleware/auth");

// Register
router.post("/register", async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({
      error: "Name and password are required",
    });
  }

  const user = await service.registerUser(name, password);

  res.status(201).json({
    id: user.id,
    name: user.name,
  });
});

// Login
router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  const user = await service.loginUser(name, password);

  if (!user) {
    return res.status(401).json({
      error: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  res.json({ token });
});

// Protected Route
router.get("/profile", authenticate, (req, res) => {
  res.json({
    message: "Welcome!",
    user: req.user,
  });
});

module.exports = router;
