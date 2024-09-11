const ProductIntro = ({ formData, handleChange }) => {
  return (
    <form className=" max-w-md mx-auto shadow-2xl p-4">
      <h1 className=" text-center text-4xl mb-4 font-bold">Product Intro</h1>
      <div className=" flex items-center gap-3 flex-col w-full">
        <input
          onChange={handleChange}
          value={formData.name}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          type="text"
          placeholder="name"
          id="name"
        />
        <input
          onChange={handleChange}
          value={formData.catagory}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          type="text"
          placeholder="catagory"
          id="catagory"
        />
        <input
          onChange={handleChange}
          value={formData.description}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          type="text"
          placeholder="description"
          id="description"
        />
        <input
          onChange={handleChange}
          value={formData.brand}
          className=" p-3 rounded-lg bg-gray-300 w-full outline-none"
          type="text"
          placeholder="brand"
          id="brand"
        />
      </div>
    </form>
  );
};

export default ProductIntro;
