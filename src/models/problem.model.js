import mongoose, { Schema, Model } from "mongoose";

// Defining the Schema with Vaildation
const problemSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title can not be empty"],
  },
  description: {
    type: String,
    required: [true, "Description can not be empty"],
  },
  difficulty: {
    type: String,
    required: [true, "Difficulty can not be empty"],
    enum: ["easy", "medium", "hard"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      },
    },
  ],
  editorial: {
    type: String,
  },
});

// Modeling the schema
const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
