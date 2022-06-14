import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    content: { type: String, default: "" },
    a: { type: String, default: "" },
    b: { type: String, default: "" },
    c: { type: String, default: "" },
    d: { type: String, default: "" },
    correctAns: { type: String, default: "" }
  },
  {
    timestamps: true
  }
)

export const SmQuestionModel = mongoose.model("SmQuestion", schema)
