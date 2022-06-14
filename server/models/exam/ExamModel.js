import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    type: { type: String, default: "default" },
    desciption: { type: String, default: "" },
    name: { type: String, default: "" },
    big_questions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "BigQuestion" }
    ],
    size: { type: Number, default: 0 },
    time: { type: Number, default: 120 }
  },
  {
    timestamps: true
  }
)

export const ExamModel = mongoose.model("Exam", schema)
