import mongoose from "mongoose";


const schema = new mongoose.Schema({
  name: { type: String, required: true},
  desciption: {type: String, default: ''},
  image: {type:String, default: ''},
  follow: {type:Number, default: 0},
  list_topic:[{type: mongoose.Schema.Types.ObjectId, ref: "VocaTopic"}]
}, {
  timestamps: true,
})

export const VocaCourseModel = mongoose.model('WordCourse', schema)

