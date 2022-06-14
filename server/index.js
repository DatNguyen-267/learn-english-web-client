import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config' 
import mongoose from 'mongoose'
import { route } from './routers/index.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()
const PORT = process.env.port ||5000
const DATABASE_PASSWORD = "mLg6obqU0wlfugkf"
const URI = `mongodb+srv://admin:${DATABASE_PASSWORD}@cluster0.p7d7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// MIDDLE WARE
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}))
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
}))
app.use(fileUpload({
  useTempFiles: true,
}))
// app.use(session({
//   key: "token",
//   secret: "subs",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     expires: 60*60*24,
//   }
// }))
// CONECT DATABASE
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> {
    console.log('Connected to DB')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
      // http://localhost:5000/
    })
  }).catch((err)=> {
    console.log(err)
  })

import fileUpload from 'express-fileupload'

route(app)



