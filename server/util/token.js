import jwt from 'jsonwebtoken'

export const createActivationToken = (payload) => {
  return jwt.sign(payload, "admin123", {expiresIn: '5m'})
}
export const createAccessToken = (payload) => {
  return jwt.sign(payload, "admin123", {expiresIn: '1d'})
}
export const createRefreshToken = (payload) => {
  return jwt.sign(payload, "admin123", {expiresIn: '5d'})
}