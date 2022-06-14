import  mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true},
  part: { type: Number, default: ''},
  icon: { type: String, default: ''},
  amount_part: {type: Number, default: 0},
  list_part:[{type: mongoose.Schema.Types.ObjectId, ref: "LsPart"}]
}, {
  timestamps: true,
})

export const LsCourseModel = mongoose.model('LsCourse', schema)

