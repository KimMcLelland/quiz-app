import express from "express";
import bcrypt from "bcrypt";
import User from "../models/users.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const user = await User.findOne({ name: req.body.name });
  const result = await bcrypt.compare(req.body.password, user.password);
  result
    ? res.status(200).json({ message: "ok", status: result })
    : res.status(500).json({ message: "not ok", status: result });
});

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  try {
    const user = await new User(req.body).save();
    res
      .status(201)
      .json({ message: "ok", user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "not ok", error: error });
  }
});

export default router;
