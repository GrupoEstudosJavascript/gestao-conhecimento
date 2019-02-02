import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';
import timestamp from 'mongoose-timestamp';
import queryString from 'mongoose-string-query';

const User = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, bcrypt: true },
  admin: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  recoveryCode: { type: String, bcrypt: true },
});
User.plugin(bcrypt);
User.plugin(timestamp);
User.plugin(queryString);

export default mongoose.model('Users', User);
