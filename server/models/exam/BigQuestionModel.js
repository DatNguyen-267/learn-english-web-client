import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    type: { type: String, default: "default" },
    description: { type: String, default: "" },
    audio: { type: String },
    images: [{ type: String }],
    sm_questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "SmQuestion" }]
    // size: {type: Number, default: 0}
  },
  {
    timestamps: true
  }
)

export const BigQuestionModel = mongoose.model("BigQuestion", schema)
