import Product from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const newProduct = new Product(body);
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.json({ message: "error while creating user" });
  }
};

export const allProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: "error while creating user" });
  }
};

export const updateProduct = async (req, res, next) => {
  const prodId = req.params.id;
  const body = req.body;
  try {
    const updateProduct = await Product.findByIdAndUpdate(prodId, body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    res.json({ message: "cant create product" });
  }
};
