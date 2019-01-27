import mongoose, { Schema } from 'mongoose';

const User = new Schema({
  email: { type: String },
  username: { type: String },
  password: { type: String },
});

export default mongoose.model('Users', User);
