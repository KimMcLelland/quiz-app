import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("user", User);
