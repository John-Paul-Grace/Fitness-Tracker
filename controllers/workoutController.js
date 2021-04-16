const Workout = require("../models/Workout.js");

const workoutController = {
    getAll: (req, res) => {
        Workout.find()
            .then(data => res.json(data));
    },
    createNew: (req, res) => {
        Workout.create({
            day: new Date(new Date().setDate(new Date().getDate() - 4)),
            exercises: []
        })
            .then(data => res.json(data));
    },
    addToWorkout: () => {}
};

module.exports = workoutController;
