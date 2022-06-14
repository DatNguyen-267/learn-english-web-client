import { UserModel } from "../models/UserModel"

const authAmin = (req,res,next) => {
  try {
    const user = await UserModel.findOne({_id: req.user.id})
    if (user.role !== 1) return res.status(500).json({msg:"Từ chối quyền admin"})
    next()
  } catch (error) {
    return res.status(500).json({msg: error.message})
  }
}
