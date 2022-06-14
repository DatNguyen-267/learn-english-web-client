
import { UserProcessModel } from "../models/user/UserProcessModel.js"
import { WordStoreModel } from "../models/WordStoreModel.js"

export const getAllWordStore = async (req, res) => {
  try {
    const store = await WordStoreModel.find().populate("list_word")
    res.status(200).json(store)
  } catch (err) {
    res.status(500).json({ err: err })
  }
}
export const getWordStoreByUser = async (req, res) => {
  try {
    // if(req.authOptional === true){
    //   const idUser= res.user.id
    //   console.log(idUser)
    //   const store = await WordStoreModel.findOne({id_user: idUser}).populate("list_word")
    //   res.status(200).json(store)
    // }
    // else{

    //   const store = await WordStoreModel.find().populate("list_word")
    //   res.status(200).json(store)
    // }
    const idUser = req.params.idUser
    if (idUser) {
      const store = await WordStoreModel.findOne({ id_user: idUser }).populate(
        "list_word"
      )
      res.status(200).json(store)
    } else {
      res.status(200).json(null)
    }
  } catch (err) {
    res.status(500).json({ err: err })
  }
}
