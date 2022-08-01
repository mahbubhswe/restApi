import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  name: String,
  authName: String,
  qty: Number,
  page: Number,
  date: {
    type: Date,
    default: Date.now()
  },
});

const Book = mongoose.models.Book
  ? mongoose.models.Book
  : mongoose.model("Book", bookSchema);
export default Book;