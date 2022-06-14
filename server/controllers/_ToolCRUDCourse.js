import { VocaCourseModel } from "../models/VocaCourseModel.js"


export const testGET = async (req, res) => {
  const courses = await VocaCourseModel.find()
  res.status(200).json(courses)
}

export const addVocaToTopic = async (req, res) => {
  const newWord = new WordModel({
    english: "convince",
    meanings: [{
      partOfSpeech: "v",
      vietnamese: "Thuyết phục",
      synonyms: "assure, persuade"
    }
    ],
    definition: "to make somebody / yourselft believe that something is true",
    example: {
      sentense: "He convinced me that he was right.",
      mean: "Anh ấy đã thuyết phục tôi rằng anh ấy đã đúng.",
      audio: "",
    },
  })
  await newWord.save()
  const topic = await VocaTopicModel.findOne({ _id: req.params.idVocaTopic }).populate("list_word")

  topic.list_word.push(newWord)
  await topic.save()
}

export const createVocaCourse = async (req, res) => {
  const newCourse = VocaCourseModel({
    name: 'Bộ từ vựng TOEIC cơ bản',
    image: 'https://www.zila.com.vn/wp-content/uploads/2021/08/toeic-la-gi-zila.png',
    desciption: "Chứa các tự vựng cơ bản của TOEIC",
    follow: 124856,
  })
  await newCourse.save()
}

export const createVocaTopic = async (req, res) => {
  const newVocaTopic = new VocaTopicModel({
    "name": "Warranties",
    "image": "",
    "list_word": []
  })
  await newVocaTopic.save()
}