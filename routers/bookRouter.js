import express from "express";
import {auth} from "./../utils/auth.js"
import { getBooks, createBook,deleteBook,getBook ,updateBook} from "./../controllers/bookController.js";
const bookRouter = express.Router();
bookRouter.post("/create", auth, createBook);
bookRouter.get("/", getBooks);
bookRouter.get("/:id", auth, getBook);
bookRouter.patch("/update/:id", auth, updateBook);
bookRouter.delete("/delete/:id", auth, deleteBook);
export default bookRouter;
