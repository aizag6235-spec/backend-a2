const express = require("express");
const router = express.Router();

const service = require("../services/userService");

router.get("/users", async (req, res) => {
  const users = await service.getUsers();
  res.json(users);
});

router.post("/users", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }

  const user = await service.createUser(name);

  res.status(201).json(user);
});

module.exports = router;
