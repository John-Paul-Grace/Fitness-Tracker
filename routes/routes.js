const router = require("express").Router();
const path = require("path");
const workoutController = require("../controllers/workoutController.js");

// HTML Routes
// ==================================================================
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});
// ==================================================================

// API Routes
// ==================================================================
router.get("/api/workouts", workoutController.getAll);

router.get("/api/workouts/range", workoutController.getPastSeven);

router.post("/api/workouts", workoutController.createNew);

router.put("/api/workouts/:id", workoutController.addExercise);
// ==================================================================

module.exports = router;
