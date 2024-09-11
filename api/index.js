import express from "express";
import { connectDb } from "./utils/connectDb.js";
import router from "./routes/product.route.js";
const app = express();
const PORT = process.env.PORT || 8000;
connectDb("mongodb://localhost:27017/reactTask");
app.use(express.json());
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`app is litening on port ${PORT}`);
});
