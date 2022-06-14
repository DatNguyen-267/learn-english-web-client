import  mongoose from "mongoose";

const schema = new mongoose.Schema({
  img: { type: String, default: ''},
  sound: {type: String, default: ''},
  transcript: {type: String, default: ''},
  list_min_question:[{type: mongoose.Schema.Types.ObjectId, ref: "LsMinQuestion"}],
}, {
  timestamps: true,
})

export const LsQuestionModel = mongoose.model('LsQuestion', schema)

