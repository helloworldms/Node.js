import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  xl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Tilte is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model(" videosLi", VideoSchema);
export default model;
