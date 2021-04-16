const Workout = require("../models/Workout.js");

const workoutController = {
    getAll: (req, res) => {
        Workout.find()
            .then(data => res.json(data));
    },
    postNewWorkout: () => {},
    addToWorkout: () => {}
};

module.exports = workoutController;
