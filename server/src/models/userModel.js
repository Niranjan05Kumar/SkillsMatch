const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    bio: {
      type: String,
      default: "No bio provided",
    },
    resume: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
      default: "Not specified",
    },
    skills: [
      {
        type: String,
        default: "Not specified",
      },
    ],
    experience: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    education: {
      type: String,
      default: "Not specified",
    },
    invitesSent: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    invitesReceived: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
