import mongoose from "mongoose";
import Users from "./users.js";

const Results = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	points: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
	/*intensity: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	}*/
})

export default mongoose.model("results", Results);