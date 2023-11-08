import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constant.js";

dotenv.config({path:"./.env"});

const connectDatabase = async () => {
  try {
    const databaseInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "Databse Connected to Host",
      `HostName: ${databaseInstance.connection.host}`
    );
  } catch (error) {
    console.error("ERROR: Issues while connecting to Database", error);
  }
};

export default connectDatabase;
