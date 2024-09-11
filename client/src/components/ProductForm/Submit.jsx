import React, { useState } from "react";

const Submit = ({ formData, handleSubmit, handleUpdate }) => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleCheckboxChange = (event) => {
    setAgreeToTerms(event.target.checked);
  };

  return (
    <div className=" shadow-lg p-4 text-xl">
      <h1>Review & Submit</h1>
      <p>
        Please review all the details you have provided before submitting the
        product.
      </p>

      <div>
        <h2>Product Summary</h2>
        <p>
          <strong>Product Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Category:</strong> {formData.catagory}
        </p>
        <p>
          <strong>Description:</strong> {formData.description}
        </p>
        <p>
          <strong>Price:</strong> {formData.brand}
        </p>

        <p>
          <strong>Stock:</strong> {formData.stock}
        </p>
        <p>
          <strong>available:</strong> {formData.available}
        </p>

        <p>
          <strong>Color:</strong> {formData.color}
        </p>
        <p>
          <strong>Size:</strong> {formData.size}
        </p>
        <p>
          <strong>Warranty:</strong> {formData.warranty}
        </p>
      </div>

      <div className=" flex items-center gap-3">
        <input
          className="w-6 h-6 cursor-pointer"
          type="checkbox"
          checked={agreeToTerms}
          onChange={handleCheckboxChange}
        />
        <label>I agree to the terms and conditions.</label>
      </div>
      <div className=" flex items-center gap-4">
        <button
          onClick={handleSubmit}
          className="p-3 bg-gray-400 rounded-lg uppercase my-3"
        >
          submit
        </button>
        <button
          onClick={handleUpdate}
          className="p-3 bg-gray-400 rounded-lg uppercase my-3"
        >
          update product info
        </button>
      </div>
    </div>
  );
};

export default Submit;
