const express = require("express");
const mongoose = require("mongoose");

// PORT will grab the current processes port if it exists. Otherwise, it will equal 3000.
const PORT = process.env.PORT || 3000;

const app = express();

// Enables middleware to parse url parameters and request body objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets the static folder as public so that requests made by html start in this folder
app.use(express.static("public"));

// Connects to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Imports and enables the routes
app.use(require("./routes/routes.js"));

// Starts the server listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
