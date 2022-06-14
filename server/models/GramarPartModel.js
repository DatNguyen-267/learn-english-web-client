
import  mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true},
  content: { type: String, default: ""}
}, {
  timestamps: true,
})

export const GrammarPartModel = mongoose.model('GrammarPart', schema)

