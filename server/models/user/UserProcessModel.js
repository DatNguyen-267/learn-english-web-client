import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id_user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  list_voca: [{
    id_voca: {type: mongoose.Schema.Types.ObjectId, ref: "VocaCourse"},
    process: {type: Number, default: 0},
    list_topic: [{
      id_topic: {type: mongoose.Schema.Types.ObjectId, ref: "VocaTopic"},
      process: {type: Number, default: 0},
      isSuccess: {type: Boolean, default: false}
    }]
  }]
}, {
  timestamps: true,
})

export const UserProcessModel = mongoose.model('UserProcess', schema)

