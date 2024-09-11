import { useState } from "react";

const ProductDetails = ({ formData, handleChange }) => {
  return (
    <form className=" max-w-md mx-auto shadow-2xl p-4">
      <h1 className=" text-center text-4xl mb-4 font-bold">Product Details</h1>
      <div className=" flex items-center gap-3 flex-col w-full">
        <input
          onChange={handleChange}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          value={formData.price}
          type="number"
          placeholder="price"
          id="price"
        />

        <input
          onChange={handleChange}
          value={formData.stock}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          type="number"
          placeholder="stock"
          id="stock"
        />
        <select
          onChange={handleChange}
          value={formData.available}
          id="available"
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
        >
          <option value="in stock">in stock</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="Preorder">Preorder</option>
        </select>
      </div>
    </form>
  );
};

export default ProductDetails;
