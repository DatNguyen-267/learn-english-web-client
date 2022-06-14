import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  list_word: [{type: mongoose.Schema.Types.ObjectId, ref: "Word"}]
}, {
  timestamps: true,
})

export const WordStoreModel = mongoose.model('WordStore', schema)

