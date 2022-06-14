import { LsTopicModel } from "../models/LsTopicModel.js";
import { LsCourseModel } from "../models/LsCourseModel.js";
import { LsPartModel } from "../models/LsPartModel.js";
import { LsQuestionModel } from "../models/LsQuestionModel.js";

export const getAllLsTopic = async(req,res) => {
    try {
      // Tạo dữ liệu mẫu 1 lần xong xóa đi
    
      // const LsQuestion = await LsQuestionModel.find()
      // const newLsPart = LsPartModel(
      //   {
      //     name:"Photograph 1",
      //     amount_question: 3,
      //     list_question:[LsQuestion[0],LsQuestion[1], LsQuestion[2]] ,
      //   }
      // )
      // await newLsPart.save()
      // const newLsPart2 = LsPartModel(
      //   {
      //     name:"Photograph 2",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart2.save()
      // const newLsPart3 = LsPartModel(
      //   {
      //     name:"Photograph 3",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart3.save()
      // const newLsPart4 = LsPartModel(
      //   {
      //     name:"Photograph 4",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart4.save()
      // const newLsPart5 = LsPartModel(
      //   {
      //     name:"Question and response 1",
      //     amount_question: 4,
      //     list_question:[LsQuestion[3],LsQuestion[4], LsQuestion[5], LsQuestion[6]] ,
      //   }
      // )
      // await newLsPart5.save()
      // const newLsPart6 = LsPartModel(
      //   {
      //     name:"Question and response 2",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart6.save()
      // const newLsPart7 = LsPartModel(
      //   {
      //     name:"Question and response 3",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart7.save()
      // const newLsPart8 = LsPartModel(
      //   {
      //     name:"Question and response 4",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart8.save()
      // const newLsPart9 = LsPartModel(
      //   {
      //     name:"Conversations 1",
      //     amount_question: 3,
      //     list_question:[LsQuestion[7],LsQuestion[8], LsQuestion[9]] ,
      //   }
      // )
      // await newLsPart9.save()
      // const newLsPart10 = LsPartModel(
      //   {
      //     name:"Conversations 2",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart10.save()
      // const newLsPart11 = LsPartModel(
      //   {
      //     name:"Conversations 3",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart11.save()
      // const newLsPart12 = LsPartModel(
      //   {
      //     name:"Conversations 4",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart12.save()
      // const newLsPart13 = LsPartModel(
      //   {
      //     name:"Short talks 1",
      //     amount_question: 3,
      //     list_question:[LsQuestion[10],LsQuestion[11], LsQuestion[12]] ,
      //   }
      // )
      // await newLsPart13.save()
      // const newLsPart14 = LsPartModel(
      //   {
      //     name:"Short talks 2",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart14.save()
      // const newLsPart15 = LsPartModel(
      //   {
      //     name:"Short talks 3",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart15.save()
      // const newLsPart16 = LsPartModel(
      //   {
      //     name:"Short talks 4",
      //     amount_question: 0,
      //   }
      // )
      // await newLsPart16.save()		
      
      // const newLsCourse = LsCourseModel({
      //   name: "Photographs",
      //   part: 1,
      //   icon: `<i class="fas fa-images"></i>`,
      //   amount_part: 4,
      //   list_part: [newLsPart,newLsPart2,newLsPart3,newLsPart4] 
      // })
      // await newLsCourse.save()	
      // const newLsCourse2 = LsCourseModel({
      //   name: "Question and response",
      //   part: 2,
      //   icon: `<i class="far fa-comment"></i>`,
      //   amount_part: 4,
      //   list_part: [newLsPart5,newLsPart6,newLsPart7,newLsPart8] 
      // })
      // await newLsCourse2.save()

      // const newLsCourse3 = LsCourseModel({
      //   name: "Conversations",
      //   part: 3,
      //   icon: `<i class="fas fa-user-friends"></i>`,
      //   amount_part: 4,
      //   list_part: [newLsPart9,newLsPart10,newLsPart11,newLsPart12] 
      // })
      // await newLsCourse3.save()
      
	    // const newLsCourse4 = LsCourseModel({
      //   name: "Short talks",
      //   part: 4,
      //   icon: `<i class="fas fa-phone-volume"></i>`,
      //   amount_part: 4,
      //   list_part: [newLsPart13,newLsPart14,newLsPart15,newLsPart16] 
      // })
      // await newLsCourse4.save()
      
	    // const newLsTopic = LsTopicModel(
      //   {
      //   list_course: [newLsCourse,newLsCourse2,newLsCourse3,newLsCourse4]
      //   }
      // )
      // await newLsTopic.save()

      // await LsPartModel.deleteMany()
      // await LsCourseModel.deleteMany()
      // await LsTopicModel.deleteMany()
      // --------------------------------
      const LsTopic = await LsTopicModel.find().populate("list_course")
      res.status(200).json(LsTopic)
    }
    catch(err) {
      res.status(500).json({err: err})
    }
  }
export const getLsCourse = async(req,res) => {
    try {
      const Lscourses = await LsCourseModel.find().populate("list_part")
      res.status(200).json(Lscourses)
    }
    catch(err) {
      res.status(500).json({err: err})
    }
  }
export const findLsCourse = async(req,res) => {
    try {
      const Lscourses = await LsCourseModel.find({_id: req.params.id}).populate("list_part")
      res.status(200).json(Lscourses)
    }
    catch(err) {
      res.status(500).json({err: err})
    }
  }
export const findLsPart = async(req,res) => {
    try {
      const Lscourses = await LsPartModel.find({_id: req.params.id}).populate({path: "list_question", populate: {path: "list_min_question", populate: {path: "list_answer"}}})
      res.status(200).json(Lscourses)
    }
    catch(err) {
      res.status(500).json({err: err})
    }
  }