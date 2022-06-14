import mongoose from "mongoose";

const schema = new mongoose.Schema({
  account_name: { type: String },
  email: { type: String },
  password: { type: String },
  name: String,
  birth_date: Date,
  sex: { type: Number, default: 0 },
  avatar: { type: String },
}, {
  timestamps: true,
})

export const UserModel = mongoose.model('User', schema)

