import  mongoose from "mongoose";

const schema = new mongoose.Schema({
  content: {type: String, default: ''},
}, {
  timestamps: true,
})

export const AnswerModel = mongoose.model('Answer', schema)

