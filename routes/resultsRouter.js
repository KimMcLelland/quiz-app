import express from "express";
import Results from "../models/results.js";
import Users from "../models/users.js";

const router = express.Router();

router.get("/", (req, res) => {
	Results.find({}, (err, results) => {
	if (err) {
		res.status(500).json({status: "NOT OK", err});
  	} else {
  		res.status(200).json({status: "OK", results});
  	}
  });
});

router.post("/log", (req, res) => {
	new Results(req.body).save((err, results) => {
		if (err) {
			res.status(500).json({status: "NOT OK", err});
	  	} else {
	  		res.status(200).json({status: "OK", results});
		}
	});
});


// router.post("/user/", (req, res) => {
// 	Results.find({userId: req.body.id}, async (err, results) => {
// 		if (err) {
// 			res.status(500).json({status: "NOT OK", err});
// 		} else if (!results) {
// 			res.json(404).json({status: "400 BAD REQUEST", message: "NOT FOUND"})
// 		} else {
// 			const user = await User.findOne({_id: req.body.id}).exec();
// 			res.status(200).json({status: "201 Created", results, username: user.username, userId: user._id});
// 		}
// 	});

// });

export default router;
