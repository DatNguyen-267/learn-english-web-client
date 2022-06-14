import { UserModel } from "../models/user/UserModel.js"
import { UserProcessModel } from "../models/user/UserProcessModel.js"
import { VocaCourseModel } from "../models/VocaCourseModel.js"
import { VocaTopicModel } from "../models/VocaTopicModel.js"
import { WordStoreModel } from "../models/WordStoreModel.js"
import { WordModel } from "./../models/WordModel.js"
export const getAllVocaCourse = async (req, res) => {
  try {
    const courses = await VocaCourseModel.find()
    res.status(200).json(courses)
  } catch (err) {
    res.status(500).json({ err: err })
  }
}
export const getVocaCourse = async (req, res, next) => {
  // console.log(req.authOptional)
  // await new UserProcessModel({
  //   id_user: req.user.id,
  //   // list_voca: []
  // }).save()

  try {
    const pr_id_voca = req.params.idVocaCourse
    const vocaCourse = await VocaCourseModel.findOne({
      _id: pr_id_voca
    }).populate("list_topic")

    if (req.authOptional === true) {
      const id_user = req.user.id
      // Lấy thông tin khóa học của người dùng
      // Tìm xem có khóa học này hay không
      const userProgress = await UserProcessModel.findOne({ id_user: id_user })
      if (userProgress) {
        // Kiểm tra xem khóa đã tồn tại trong database của user
        let voca = userProgress.list_voca.find((item, index) => {
          if (item.id_voca.toString() === vocaCourse._id.toString()) {
            return item
          }
        })

        if (voca) {
          // Đã tồn tại
          res.status(200).json({
            vocaCourse,
            userProcess: voca
          })
        } else {
          // Chưa tồn tại
          console.log("Chua tồn tại")
          let newListTopic = []
          vocaCourse.list_topic.forEach(element => {
            newListTopic.push({
              id_topic: element._id,
              process: 0,
              isSuccess: false
            })
          })
          let newVoca = {
            id_voca: vocaCourse._id,
            process: 0,
            list_topic: newListTopic
          }

          let userProcess = await UserProcessModel.findOneAndUpdate(
            { id_user: id_user },
            { $push: { list_voca: newVoca } },
            { new: true }
          )

          let voca = userProcess.list_voca.find((item, index) => {
            if (item.id_voca.toString() === vocaCourse._id.toString()) {
              return item
            }
          })
          res.status(200).json({
            vocaCourse,
            userProcess: voca
          })
        }
      } else {
        let newListTopic = []
        vocaCourse.list_topic.forEach(element => {
          newListTopic.push({
            id_topic: element._id,
            process: 0,
            isSuccess: false
          })
        })
        let newVoca = {
          id_voca: vocaCourse._id,
          process: 0,
          list_topic: newListTopic
        }
        let userProcess = new UserProcessModel({
          id_user: id_user,
          list_voca: [newVoca]
        })
        await userProcess.save()
        let voca = userProcess.list_voca.find((item, index) => {
          if (item.id_voca.toString() === vocaCourse._id.toString()) {
            return item
          }
        })
        res.status(200).json({
          vocaCourse,
          userProcess: voca
        })
      }
    } else {
      res.status(200).json(vocaCourse)
    }
  } catch (err) {
    res.status(500).json({ err: err })
  }
}
export const getVocaTopic = async (req, res, next) => {
  try {
    const idVoca = req.params.idVocaCourse
    const idVocaTopic = req.params.idVocaTopic

    const userProcesses = await UserProcessModel.findOne({
      id_user: req.user.id
    })
    const userListVoca = userProcesses.list_voca.find(
      item => item.id_voca == idVoca
    )

    let userTopic = null
    if (userListVoca) {
      userTopic = userListVoca.list_topic.find(
        item => item.id_topic == idVocaTopic
      )
    }

    let topic = await VocaTopicModel.findOne({ _id: req.params.idVocaTopic })
      .populate("list_word")
      .lean()
    // console.log(topic)
    if (userTopic.isSuccess) {
      let WordStore
      let resTopic
      try {
        WordStore = await WordStoreModel.findOne({ id_user: req.user.id })
      } catch (error) {
        console.log(error)
      }
      if (WordStore) {
        resTopic = topic.list_word.map((item, index) => {
          try {
            if (
              WordStore.list_word.findIndex(
                item2 => item2.toString() == item._id.toString()
              ) > 0
            ) {
              return { ...item, isSave: true }
            } else return { ...item, isSave: false }
          } catch (error) {
            console.log(error)
          }
        })
      }
      topic.list_word = resTopic
      res.status(200).json(topic)
    } else {
      const min = userTopic.process
      let max = null
      if (topic.list_word.length - min >= 10) max = 5
      else max = topic.list_word.length - min
      let resTopic = topic.list_word.filter((item, index) => {
        if (index >= min && index < min + max) return item
      })
      // console.log(resTopic)
      let WordStore
      try {
        WordStore = await WordStoreModel.findOne({ id_user: req.user.id })
      } catch (error) {
        console.log(error)
      }

      if (WordStore) {
        resTopic = resTopic.map((item, index) => {
          try {
            if (
              WordStore.list_word.findIndex(
                item2 => item2.toString() == item._id.toString()
              ) > 0
            ) {
              return { ...item, isSave: true }
            } else return { ...item, isSave: false }
          } catch (error) {
            console.log(error)
          }
        })
      }

      topic.list_word = resTopic

      res.status(200).json(topic)
    }
  } catch (err) {
    res.status(500).json({ err: err })
  }
}

export const addWordToStore = async (req, res, next) => {
  let userProcess = await WordStoreModel.findOneAndUpdate(
    { id_user: req.user.id },
    {
      $push: { list_word: req.body.idWord }
    },
    { new: true }
  )
  res.status(200).json("success")
}

export const removeWordOfStore = async (req, res, next) => {
  let userProcess = await WordStoreModel.updateOne(
    { id_user: req.user.id },
    {
      $pull: { list_word: req.body.idWord }
    },
    { new: true }
  )
  res.status(200).json("success")
}
export const completedTopic = async (req, res, next) => {
  const idTopic = req.body.idTopic
  const idVoca = req.body.idVoca
  const idUser = req.user.id
  const length = req.body.length

  const userProcess = await UserProcessModel.findOne({ id_user: idUser })
  for (let index = 0; index < userProcess.list_voca.length; index++) {
    let element = userProcess.list_voca[index]

    if (element.id_voca.toString() === idVoca) {
      for (let j = 0; j < element.list_topic.length; j++) {
        let element2 = element.list_topic[j]
        if (element2.id_topic.toString() === idTopic) {
          if (!element.list_topic[j].isSuccess) {
            const rootTopic = await VocaTopicModel.findOne({
              _id: element2.id_topic
            })
            if (rootTopic.list_word.length === length + element2.process) {
              // Hoàn thành
              element2.process = length + element2.process
              element2.isSuccess = true
            } else {
              element2.process = length + element2.process
            }
            await userProcess.save()
            break
          }
        }
      }
      break
    }
  }
  res.status(200).json("success")
}

export const getListWord = async (req, res, next) => {
  const topicId = req.params.topicId
  try {
    const topic = await VocaTopicModel.find({ _id: topicId }).populate(
      "list_word"
    )
    res.status(200).json(topic)
  } catch (error) {
    res.status(400).json({ error })
  }
}
export const getCourse = async (req, res, next) => {
  const courseId = req.params.courseId

  try {
    const course = await VocaCourseModel.find({ _id: courseId })
    res.status(200).json(course)
  } catch (error) {
    res.status(400).json({ error })
  }
}

export const reviewTopic = async (req, res, next) => {
  const lsId = req.params.lsId.split("-")
  let newLs = []
  const topics = await VocaTopicModel.find({ _id: { $in: lsId } }).populate(
    "list_word"
  )
  topics.forEach(element => {
    newLs = [...newLs, ...element.list_word]
  })
  res.status(200).json(newLs)
}
