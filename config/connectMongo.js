import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectMongo = async () => mongoose.connect(process.env.MONGDB_URL);
export default connectMongo;
