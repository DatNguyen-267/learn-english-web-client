// import e from "cors"
// import {CourseModel} from "../models/CourseModel.js"
// import { WordCourseModel } from "../models/VocaCourseModel.js"
// import { TopicModel } from "../models/TopicModel.js"

// export const getCourse = async (req, res) => {
//   try {
//     // const newTopic = TopicModel({
//     //   name: 'Văn phòng',
//     //   image: '1xx33'
//     // })
//     // await newTopic.save()
    
//     // const newCourseWord = WordCourseModel({
//     //   name: '600 toeic',
//     //   description: 'Có trong đề thi',
//     //   image: '1xx33',
//     //   follow: 12,
//     //   list_topic: [newTopic]
//     // })
//     // await newCourseWord.save()
//     // --------------------------------
//     const courses = await WordCourseModel.find().populate("list_topic")
//     // console.log('courses', courses)
//     res.status(200).json(courses)
//   }
//   catch(err) {
//     res.status(500).json({err: err})
//   }
// }

// export const createCourse = async (req, res) => {
//   try {
//     const newCourse = req.body 

//     const course = new CourseModel(newCourse)
//     await course.save()

//     res.status(200).json(course)
//   } catch (error) {
//     res.status(200).json({error: error})
//   }
// }

// export const updateCourse = async (req, res) => {
//   try {
//     const updateCourse = req.body 

//     const course = CourseModel.findOneAndUpdate({
//       _id: updateCourse._id
//     }, updateCourse, {
//       new: true
//     })
//     res.status(200).json(course)
    
//   } catch (error) {
//     res.status(200).json({error: error})
//   }
// }