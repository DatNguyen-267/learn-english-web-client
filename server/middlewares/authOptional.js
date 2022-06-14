import jwt from "jsonwebtoken";

const authOptional = (req,res,next) => {
  try {
    req.authOptional = true
    const token = req.header("Authorization")
    if (!token) req.authOptional = false
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
      if (err) req.authOptional = false
      req.user = user
      next()
    })
  } catch (error) {
    return res.status(500).json({msg:error.message})
  }
}

export default authOptional