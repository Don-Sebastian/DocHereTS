import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Incorrect Name"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
  },
  googleId: {
    type: String,
  },
  avatar: {
    type: String,
  },
  provider: {
    type: String,
  },
  google_verified: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model('User', userSchema, 'users');

export default User;