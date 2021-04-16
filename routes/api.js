const router = require("express").Router();
const path = require("path");
const workoutController = require("../controllers/workoutController.js");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get("/api/workouts", workoutController.getAll);

router.get("/api/workouts/range", workoutController.getAll);

router.post("/api/workouts", workoutController.createNew);

router.put("/api/workouts/:id", workoutController.addExercise);

module.exports = router;
