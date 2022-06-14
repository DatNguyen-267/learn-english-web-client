
import  mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true},
  list_part:[{type: mongoose.Schema.Types.ObjectId, ref: "GrammarPart"}]
}, {
  timestamps: true,
})

export const GrammarTopicModel = mongoose.model('GrammarTopic', schema)

