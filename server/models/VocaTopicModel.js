import  mongoose  from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true},
  image: { type:String, default: ''},
  list_word: [{type: mongoose.Schema.Types.ObjectId, ref: "Word"}],
  amount: {type: Number, default: 0}
}, {
  timestamps: true,
})

export const VocaTopicModel = mongoose.model('VocaTopic', schema)

