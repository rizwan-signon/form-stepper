import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  catagory: String,
  description: String,
  brand: String,
  price: Number,
  stock: Number,
  color: String,
  size: Number,
  warranty: Number,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
