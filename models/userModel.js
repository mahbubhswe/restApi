import mongoose from "mongoose";
const userShema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    trim: true,
  },
  username: {
    type: "String",
    required: true,
    uniue: true,
    trim: true,
  },
  email: {
    type: "String",
    required: true,
    uniue: true,
    trim: true,
  },
  phone: {
    type: "String",
    required: true,
    uniue: true,
    trim: true,
  },
  password: {
    type: "String",
    required: true,
  },
  role: {
    type: "String",
    required: true,
    uniue: true,
    trim: true,
    lowercase: true,
    default: "normal",
  },
});

const User = mongoose.models.User
  ? mongoose.models.User
  : mongoose.model("User", userShema);
export default User;
