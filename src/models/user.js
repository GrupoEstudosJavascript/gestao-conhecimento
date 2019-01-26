import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';
import timestamp from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      require: true,
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      bcrypt: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: 'users' },
);

UserSchema.plugin(bcrypt);
UserSchema.plugin(timestamp);
UserSchema.plugin(mongooseStringQuery);

UserSchema.index({ email: 1, username: 1 });

module.exports = exports = mongoose.model('User', UserSchema);
