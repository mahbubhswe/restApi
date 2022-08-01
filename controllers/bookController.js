import Book from "../models/bookModel.js";
//get book list
export const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
//create book
export const createBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.send("Created successfully");
  } catch (error) {
    res.send({ message: error.message });
  }
};
//find one
export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById({ _id: req.params.id });
    res.send(book);
  } catch (error) {
    res.send(error.message);
  }
};
//delete
export const deleteBook = async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.send("Deleted book");
  } catch (error) {
    res.send(error.message);
  }
};
//update
export const updateBook = async (req, res, next) => {
  try {
    await Book.findByIdAndUpdate({ _id: req.params.id }, { ...req.body });
    res.send("Updated");
  } catch (error) {
    res.send(error.message);
  }
};
