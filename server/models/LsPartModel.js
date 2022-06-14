import  mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true},
  amount_question: {type: Number, default: 0},
  list_question:[{type: mongoose.Schema.Types.ObjectId, ref: "LsQuestion"}],
}, {
  timestamps: true,
})

export const LsPartModel = mongoose.model('LsPart', schema)

