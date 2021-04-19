const Workout = require("../models/Workout.js");

const workoutController = {
    getAll: (req, res) => {
        Workout.find()
            .then(data => res.json(data));
    },
    createNew: (req, res) => {
        Workout.create({
            day: new Date(new Date().setDate(new Date().getDate())),
            exercises: [],
            totalDuration: 0
        })
            .then(data => res.json(data));
    },
    addExercise: (req, res) => {
        Workout.updateOne(
            { _id: req.params.id },
            {
                $push: { exercises: req.body },
                $inc: { totalDuration: req.body.duration }
            }
        )
            .then(data => res.json(data));
    }
};

module.exports = workoutController;
