import mongoose from "mongoose";
import user from "User";

const Score = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users",
		required: true
	},
	score: {
		type: Number,
		required: true
	},
	intensity: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	}
})

export default mongoose.model("scores", Score)