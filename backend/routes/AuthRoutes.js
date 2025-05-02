const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });
    
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
    try {
      console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debugging line
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is undefined");
      }
  
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  
      res.json({ success: true, token });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  

module.exports = router;
