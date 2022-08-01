import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const token=(user)=> {
  return jwt.sign(
    {
      name: user.name,
      username: user.username,
      password: user.password,
      phone: user.phone,
    },
    process.env.JWT_secret,
    {
      expiresIn: "30d",
    }
  );
}
export const auth=(req,res,next)=> {
  const { authorization } = req.headers;
  if (authorization) {
    // const token = authorization.slice(7, authorization.length)
    jwt.verify(authorization, process.env.JWT_secret, (error, decode) => {
      if (error) {
        res.send("Invalid token")
      } else {
        next()
      }
    })
  } else {
    res.send("Token is empty")
  }
}