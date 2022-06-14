import  mongoose  from "mongoose";

const schema = new mongoose.Schema({
  english: { type: String },
  meanings: [{
      partOfSpeech: {type: String, default: ''},
      vietnamese: {type: String, default: ''},
      synonyms: {type:String, default: ''},
    }],
  phonetic: {type:String, default: ''},
  audio: {type: String, default: ''},
  definition: {type:String, default: ''},
  example: {
    sentense: String,
    mean: String,
    audio: String,
  },
  image: {Type:String, default: ''},
}, {
  timestamps: true,
})

export const WordModel = mongoose.model('Word', schema)

