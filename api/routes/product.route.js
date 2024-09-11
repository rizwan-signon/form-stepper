import { Router } from "express";
import {
  allProducts,
  createProduct,
  updateProduct,
} from "../controllers/product.controoler.js";
const router = Router();

router.post("/createproduct", createProduct);
router.get("/products", allProducts);
router.put("/update/:id", updateProduct);
export default router;
