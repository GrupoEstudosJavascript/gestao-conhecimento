import mongoose, { Schema, mongo } from "mongoose";

const Article = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  coutFav: { type: Number },
  tags: { type: String, lowercase: true, enum: [] },
  authorUpdate: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, required: true, enum: ["published", "draft"] }
});

export default mongoose.model("Articles", Article);
