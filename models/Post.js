const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: [String],
    likes_count: {
      type: Number,
      default: 0,
    },
    dislikes_count: {
      type: Number,
      default: 0,
    },
    comments_count: {
      type: Number,
      default: 0,
    },
    retweet_count: {
      type: Number,
      default: 0,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
