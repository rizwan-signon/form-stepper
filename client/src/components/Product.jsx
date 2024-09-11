import { useDispatch } from "react-redux";
import { storeProductDetails } from "../redux/slices/productSlice";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = (proInfo) => {
    dispatch(storeProductDetails(proInfo));
  };
  return (
    <div
      onClick={() => handleClick(product)}
      className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:border-2"
    >
      <h1 className="text-4xl capitalize">{product.name}</h1>
      <p>{product.description}</p>
      <div className=" flex items-center gap-1 flex-wrap">
        <p>price:{product.price}</p>
        <p>stock:{product.stock}</p>
        <p>size:{product.size}</p>
        <p>warranty:{product.warranty}</p>
      </div>
    </div>
  );
};

export default Product;
