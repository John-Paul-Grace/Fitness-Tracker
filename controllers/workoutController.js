const Workout = require("../models/Workout.js");

const workoutController = {
    getLastWorkout: (req, res) => {
        Workout.find()
            .then(data => {
                res.json(data);
            });
    },
    getWorkoutsInRange: () => {},
    postNewWorkout: () => {},
    addToWorkout: () => {}
};

module.exports = workoutController;
