import mongoose, { Schema } from 'mongoose'
import timestamp from 'mongoose-timestamp'
import queryString from 'mongoose-string-query'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '~/config/configServer'

const User = new Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  username: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, bcrypt: true, required: true },
  admin: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  recoveryCode: { type: String, bcrypt: true }
})

User.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 8)
})

User.methods = {
  compareHash (password) {
    return bcrypt.compare(password, this.password)
  }
}

User.statics = {
  generateToken ({ _id }) {
    return jwt.sign({ _id }, config.secretConhecimento, { expiresIn: '1h' })
  }
}

User.plugin(timestamp)
User.plugin(queryString)
User.index({ email: 1, username: 1 })
export default mongoose.model('Users', User)
