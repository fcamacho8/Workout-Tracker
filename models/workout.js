const mongoose  = require("mongoose");

const Schema  = mongoose.Schema;
const WorkoutSchema  = new Schema(
    {
        day: {
            type: Date,
            default:Date.now
        },

        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter the name"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter the type"
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                duration: {
                    type: Number,
                    required: "Please enter the duration in minutes"
                },
                distance: {
                    type: Number
                }
            }
        ]

    }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;