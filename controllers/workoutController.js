const Workout = require("../models/Workout.js");

const workoutController = {
    // Gets all of the documents in the database and returns them
    getAll: (req, res) => {
        Workout.find()
            .then(data => res.json(data));
    },
    // Creates a new Workout document with the current date, an empty exercise array, and 0 totalDuration
    createNew: (req, res) => {
        Workout.create({
            day: new Date(new Date().setDate(new Date().getDate())),
            exercises: [],
            totalDuration: 0
        })
            .then(data => res.json(data));
    },
    // Adds a new exercise to the exercises array and adds the duration to the totalDuration
    addExercise: (req, res) => {
        Workout.updateOne(
            { _id: req.params.id },
            {
                // Pushes the req.body into the exercises array field
                $push: { exercises: req.body },
                // Increments the totalDuration field by the amount of req.body.duration.
                // Essentially, this is adding the duration to the total.
                $inc: { totalDuration: req.body.duration }
            }
        )
            .then(data => res.json(data));
    }
};

module.exports = workoutController;
