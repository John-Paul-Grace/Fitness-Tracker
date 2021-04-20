const Workout = require("../models/Workout2.js");

const workoutController = {
    // Gets all of the documents in the database and returns them
    getAll: (req, res) => {
        Workout.find()
            .then(data => res.json(data));
    },
    // Gets the seven most recent documents from the database
    getPastSeven: (req, res) => {
        // Gets all documents
        Workout.find()
            // Sorts documents from newest to oldest
            .sort({ _id: -1 })
            // Reduces length of data to 7 documents
            .limit(7)
            // Sorts documents from oldest to newest
            .sort({ _id: 1 })
            // Sends documents to client
            .then(data => res.json(data));
    },
    // Creates a new Workout document with the current date, an empty exercise array, and 0 totalDuration
    createNew: (req, res) => {
        // Creates a new documents
        Workout.create({
            day: new Date(new Date().setDate(new Date().getDate())),
            exercises: [],
            totalDuration: 0
        })
            // Sends the newly created document to the client
            .then(data => res.json(data));
    },
    // Adds a new exercise to the exercises array and adds the duration to the totalDuration
    addExercise: (req, res) => {
        Workout.updateOne(
            // Finds document with the given id
            { _id: req.params.id },
            {
                // Pushes the req.body into the exercises array field
                $push: { exercises: req.body },
                // Increments the totalDuration field by the amount of req.body.duration.
                // Essentially, this is adding the duration to the total.
                $inc: { totalDuration: req.body.duration }
            }
        )
            // Sends some information about the update to client
            .then(data => res.json(data));
    }
};

module.exports = workoutController;
