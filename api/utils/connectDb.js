import mongoose from "mongoose";
export const connectDb = (mongo_url) => {
  mongoose
    .connect(mongo_url)
    .then(() => console.log("mongo db connected suucess fully"));
};
