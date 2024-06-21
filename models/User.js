const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    display_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    profile_pic: String,
    bio: String,
    followers_count: {
      type: Number,
      default: 0,
    },
    following_count: {
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

module.exports = mongoose.model("User", userSchema);
