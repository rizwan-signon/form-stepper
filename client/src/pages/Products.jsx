import { useEffect, useState } from "react";
import Product from "../components/Product";
const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 bg-gray-800 text-white p-4 rounded-lg my-6">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
