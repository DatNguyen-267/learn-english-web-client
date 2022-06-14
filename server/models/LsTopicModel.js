
import  mongoose from "mongoose";

const schema = new mongoose.Schema({
  list_course:[{type: mongoose.Schema.Types.ObjectId, ref: "LsCourse"}]
}, {
  timestamps: true,
})

export const LsTopicModel = mongoose.model('LsTopic', schema)

