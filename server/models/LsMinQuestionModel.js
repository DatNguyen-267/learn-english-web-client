import  mongoose from "mongoose";

const schema = new mongoose.Schema({
  content: { type: String, default: ''},
  hide_content:{ type: Boolean, default: true},
  hide_answer: { type: Boolean, default: true},
  list_answer:[{type: mongoose.Schema.Types.ObjectId, ref: "Answer"}],
  true_answer: {type: mongoose.Schema.Types.ObjectId, ref: "Answer"},
}, {
  timestamps: true,
})

export const LsMinQuestionModel = mongoose.model('LsMinQuestion', schema)

