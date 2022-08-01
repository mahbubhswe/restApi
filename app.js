import express from "express";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import bookRouter from "./routers/bookRouter.js";
import connectMongo from "./config/connectMongo.js";
const app = express();
//use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//db connect
connectMongo();
//setup routes
app.use("/api/user", userRouter);
app.use("/api/books", bookRouter);
//url not found hander
app.use((req, res, next) => {
  res.status(404).json({
    message: "Bad request 404",
  });
});
//default error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something broken",
  });
});
export default app;
