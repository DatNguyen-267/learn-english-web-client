import { BigQuestionModel } from "../models/exam/BigQuestionModel.js"
import { ExamModel } from "../models/exam/ExamModel.js"
import { SmQuestionModel } from "../models/exam/SmQuestionModel.js"

export const getAllExam = async (req, res, next) => {
  try {
    const exam = await ExamModel.find()
    res.status(200).json(exam)
  } catch (error) {
    res.status(400).json({ error })
  }
}
export const getExam = async (req, res, next) => {
  const idExam = req.params.idExam
  try {
    const exam = await ExamModel.find({ _id: idExam }).populate({
      path: "big_questions",
      populate: {
        path: "sm_questions"
      }
    })
    res.status(200).json(exam)
  } catch (error) {
    res.status(400).json({ error })
  }
}

export const updateExam = async (req, res, next) => {
  // const newExam = await createExam()
  // await newExam.save()
  const idExam = req.params.idExam
  const exam = await ExamModel.find({ _id: idExam })

  const bigQues = await createBigQuestion()

  await ExamModel.updateOne(
    { _id: idExam },
    {
      $push: { big_questions: bigQues }
    },
    { new: true }
  )
  res.send("true")
}

const createBigQuestion = async () => {
  const newBigQues = new BigQuestionModel({
    type: "Part7",
    description: "",
    audio: "",
    images: [
      "https://www.anhngumshoa.com/uploads/images/userfiles/2021/06/18/image27.png",
      "https://www.anhngumshoa.com/uploads/images/userfiles/2021/06/18/image28.png",
      "https://www.anhngumshoa.com/uploads/images/userfiles/2021/06/18/image29.png"
    ],
    sm_questions: []
  })
  const newSmQues1 = new SmQuestionModel({
    content: "What does the brochure mention about Elvinna's?",
    a: "It is able to host groups of various types",
    b: "It is conveniently located in downtown Nassau.",
    c: "It has hired a new chef for its restaurant",
    d: "It plans to renovate a business center.",
    correctAns: "a"
  })
  const newSmQues2 = new SmQuestionModel({
    content:
      "What does Mr. Darville indicate about the plan for his company’s celebration?",
    a: "It should feature a simple menu.",
    b: "It will need to be rescheduled",
    c: "It will include an awards ceremony.",
    d: "It is a decision he cannot make alone.",
    correctAns: "d"
  })
  const newSmQues3 = new SmQuestionModel({
    content:
      "Where will the company's anniversary celebration most likely be held?",
    a: "In the Alameda Room",
    b: "In the Bougainvillea Room",
    c: "In the Tamarind Room",
    d: "In the Waterfall Room",
    correctAns: "b"
  })
  const newSmQues4 = new SmQuestionModel({
    content: "Why is Mr. Darville concerned?",
    a: "Not enough people have responded to an invitation",
    b: "He thinks that a different venue might cost less",
    c: "A venue that he likes might be reserved by another group",
    d: "He has not been able to secure entertainment",
    correctAns: "c"
  })
  const newSmQues5 = new SmQuestionModel({
    content:
      "When will Nassau Telecommunications’ celebration most likely take place?",
    a: "On July 10",
    b: "On July 15",
    c: "On August 5",
    d: "On August 23",
    correctAns: "d"
  })
  // const smQues = await createSmQuestion()
  await newSmQues1.save()
  await newSmQues2.save()
  await newSmQues3.save()
  await newSmQues4.save()
  await newSmQues5.save()
  newBigQues.sm_questions.push(newSmQues1)
  newBigQues.sm_questions.push(newSmQues2)
  newBigQues.sm_questions.push(newSmQues3)
  newBigQues.sm_questions.push(newSmQues4)
  newBigQues.sm_questions.push(newSmQues5)
  await newBigQues.save()
  return newBigQues
}
const createSmQuestion = async () => {
  const newSmQues = new SmQuestionModel({
    content: "What are the speakers discussing?",
    a: "A motorcycle",
    b: "A mobile phone",
    c: "A laptop computer",
    d: "An exercise machine",
    correctAns: "b"
  })
  await newSmQues.save()
  return newSmQues
}

const createExam = async () => {
  const newExam = new ExamModel({
    type: "FULL TEST",
    name: "Test 1",
    desciption: "Toeic 16",
    big_questions: []
  })
  const bigQues = await createBigQuestion()
  newExam.big_questions.push(bigQues)
  return newExam
}
