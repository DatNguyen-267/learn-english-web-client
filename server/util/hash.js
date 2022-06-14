import bcrypt from 'bcrypt'

export function encode(code){
  var salt = bcrypt.genSaltSync(10)
  var hash = bcrypt.hashSync(code, salt)
  return hash
}

export function compare(code, hash ){
  var res = bcrypt.compareSync(code, hash)
  return res
}

// console.log(encode("admin"))