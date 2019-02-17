import mongoose, { Schema } from 'mongoose'
import timestamp from 'mongoose-timestamp'
import queryString from 'mongoose-string-query'

const Article = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  countFavorited: { type: Number, default: 0 },
  tags: { type: [String], lowercase: true, required: true },
  authorUpdate: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: {
    type: String,
    required: true,
    enum: ['published', 'draft', 'deactivated']
  }
})
Article.plugin(timestamp)
Article.plugin(queryString)
Article.index({ title: 1, body: 1, tags: 1 })

export default mongoose.model('Articles', Article)
