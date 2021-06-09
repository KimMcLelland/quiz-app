import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

export default router;
