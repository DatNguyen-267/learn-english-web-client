import { UserModel } from "../models/user/UserModel.js"
import { compare, encode } from "../util/hash.js"
import jwt from "jsonwebtoken"
import { hash } from "bcrypt"
import {
  createAccessToken,
  createActivationToken,
  createRefreshToken
} from "../util/token.js"
import sendEmail from "./SendMail.js"
import { WordStoreModel } from "../models/WordStoreModel.js"

export async function checkLogin(req, res) {
  res.status(200).send("Auth success!")
}
export async function register(req, res) {
  try {
    const { email, name, password } = req.body
    let user = await UserModel.findOne({ email: req.body.email })
    if (user)
      return res.status(400).json({
        status: false,
        message: "Email này đã được đăng ký. Vui lòng nhập email khác."
      })

    const newUser = { email, name, password: await encode(password) }

    const activation_token = createActivationToken(newUser)
    const url = `${process.env.CLIENT_URL}/user/activate/${activation_token}`

    sendEmail(email, url, "Xác nhận tài khoản")
    return res.json({
      msg: "Đăng ký thành công! Vui lòng xác nhận tài khoản trong hộp thư email"
    })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
export async function activateEmail(req, res) {
  try {
    const { activation_token } = req.body
    const user = jwt.verify(
      activation_token,
      process.env.ACTIVATION_TOKEN_SECRET
    )

    const { name, email, password } = user

    const check = await UserModel.findOne({ email })
    if (check) return res.status(400).json({ msg: "Email đã tồn tại." })
    const newUser = new UserModel({ name, email, password })
    await newUser.save()
    let wordStore = new WordStoreModel({
      id_user: newUser._id,
      list_word: []
    })
    await wordStore.save()
    res.json({ status: true, msg: "Tài khoản đã được kích hoạt." })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
export async function getUser(req, res) {
  try {
    const user = await UserModel.find()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ err: error.message })
  }
}
export async function login(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  try {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email: email })
    if (!user) return res.status(400).json({ msg: "Tài khoản không tồn tại," })
    const isMatch = compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ msg: "Mật khẩu không chính xác." })

    const refresh_token = createRefreshToken({ id: user._id })
    // req.session.user = refresh_token
    // console.log(req.session.user)
    res.status(202).cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      // path: '/',
      maxAge: 7 * 26 * 60 * 60 * 1000
    })
    res.json({ status: true, msg: "Đăng nhập thành công." })
  } catch (error) {
    res.status(500).json({ err: error.message })
  }
}
export async function getAccessToken(req, res) {
  // res.header('Access-Control-Allow-Credentials', true);
  // res.header('Access-Control-Allow-Origin', req.headers.origin);
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

  try {
    const rf_token = req.cookies.refreshtoken
    if (!rf_token)
      return res.status(400).json({ status: false, msg: "Vui lòng đăng nhập!" })

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(400)
          .json({ status: false, msg: "Vui lòng đăng nhập!" })
      const access_token = createAccessToken({ id: user.id })
      res.json({ access_token })
    })
  } catch (error) {
    res.status(500).json({ err: error.message })
  }
}
export async function forgotPassword(req, res) {
  try {
    const { email } = req.body
    const user = await UserModel.findOne({ email })
    if (!user)
      return res
        .status(400)
        .json({ status: false, msg: "Email chưa được đăng ký" })

    const access_token = createAccessToken({ id: user._id })
    const url = `${process.env.CLIENT_URL}/user/reset/${access_token}`

    sendEmail(email, url, "Khôi phục mật khẩu")
    res.json({
      status: true,
      msg: "Đã xác nhận khôi phục. Vui lòng kiểm tra lại mail."
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export async function resetPassword(req, res) {
  try {
    const { password } = req.body
    const passwordHash = encode(password)

    await UserModel.findOneAndUpdate(
      { _id: req.user.id },
      {
        password: passwordHash
      }
    )

    // if (!user) return res.status(400).json({status: false, msg: "Tài khoản không tồn tại"})
    res.json({ msg: "Thay đổi mật khẩu thành công." })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function getUserInfor(req, res) {
  try {
    const user = await UserModel.findById(req.user.id).select("-password")
    res.json(user)
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
export async function logout(req, res) {
  try {
    res.clearCookie("refreshtoken", {
      path: "/user/refresh_token"
    })
    return res.json({ msg: "Logout success." })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
export async function updateUser(req, res) {
  try {
    const { name, avatar } = req.body
    await UserModel.findOneAndUpdate(
      { _id: req.user.id },
      {
        name,
        avatar
      }
    )
    res.json({ msg: "Update success" })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
