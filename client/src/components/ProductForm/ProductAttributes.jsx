const ProductAttributes = ({ formData, handleChange }) => {
  return (
    <form className=" max-w-md mx-auto shadow-2xl p-4">
      <h1 className=" text-center text-4xl mb-4 font-bold">
        Product attributes
      </h1>
      <div className=" flex items-center gap-3 flex-col w-full">
        <input
          onChange={handleChange}
          value={formData.color}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          type="color"
          placeholder="color"
          id="color"
        />
        <input
          onChange={handleChange}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          value={formData.size}
          type="number"
          placeholder="size"
          id="size"
        />
        <input
          onChange={handleChange}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          type="number"
          value={formData.warranty}
          placeholder="warranty"
          id="warranty"
        />
      </div>
    </form>
  );
};

export default ProductAttributes;
