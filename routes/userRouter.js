import express from "express";
import bcrypt from "bcrypt";
import User from "../models/users.js";

const router = express.Router();

router.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({
      username: req.body.name,
    }).exec();

    const result = await bcrypt.compare(req.body.password, user.password);
    result
      ? res.status(200).json({
          message: "ok",
          status: result,
          user: {
            id: user._id,
            username: user.username,
            email: user.email
          }
        })
      : res.status(403).json({
          message: "Authentication Failed!",
          status: result,
        });
      
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

// return user details on success
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  try {
    const user = await new Users(req.body).save();
    res.status(200).json({
      message: "ok",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "not ok",
      error: error,
    });
  }
});

export default router;
