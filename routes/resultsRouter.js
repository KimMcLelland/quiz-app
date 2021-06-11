import express from "express";
import Results from "../models/results.js";
import Users from "../models/users.js";

const router = express.Router();

/**
 * Get Results endpoint
 */
router.get("", (req, res) => {
    const userId = req.query["id"];
    // Validate input
    if (!userId) {
        res.status(500).json({
            status: "NOT OK",
            err: "user id required."
        });
        return;
    }

    Results.findOne({
        userId
    }, (err, results) => {
        if (err) {
            res.status(500).json({
                status: "NOT OK",
                err
            });
        } else {
            res.status(200).json({
                status: "OK",
                results
            });
        }
    });
});

/**
 * Insert Result enpoint
 */
router.post("", async(req, res) => {
    // Validate input
    try {
        const newResult = new Results(req.body);
        await newResult.save();
        newResult
        res.status(200).json({
            status: "OK",
            results: {
                userId: results.userId,
                points: results.points,
                date: results.date
            }
        });

    } catch (err) {
        res.status(500).json({
            status: "NOT OK",
            err
        });
    }
});

/**
 * Get leaderboard score endpoint
 */
router.get("/top", async(req, res) => {
    try {
        const dbResp = await Results.find({})
            .sort({
                points: -1
            })
            .limit(10)
            .exec();

        res.status(200).json({
            status: "OK",
            dbResp
        });
    } catch (err) {
        res.status(500).json({
            status: "NOT OK",
            err
        });
    }
});

export default router;