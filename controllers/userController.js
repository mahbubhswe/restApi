import User from "../models/userModel.js";
import { token } from "../utils/auth.js";
import bcryptjs from "bcryptjs";
//register
export const signUp=async(req, res, next)=> {
  try {
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: bcryptjs.hashSync(req.body.password),
      role: req.body.role ? req.body.role : "normal",
    });
    const createdUser = await newUser.save();
    if (createdUser) {
      res.status(200).send({
        name: createdUser.name,
        username: createdUser.username,
        email: createdUser.email,
        phone: createdUser.phone,
        token: token(createdUser),
      });
    } else {
      res.send({
        message: "Something went wrong",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
//login
export const signIn=async(req, res, next)=> {
  const user = await User.findOne({ email: req.body.email });

  if (user && bcryptjs.compareSync(req.body.password, user.password)) {
    res.status(200).send({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      token: token(user),
    });
  } else if (user) {
    res.status(401).send({ message: "Email or password incorrect." });
  } else {
    res.status(404).send({ message: "User not found with this email address" });
  }

  try {
  } catch (error) {
    res.send({ message: error.message });
  }
}
