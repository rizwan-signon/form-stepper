import React, { useState, useEffect } from "react";
import ProductIntro from "./ProductForm/ProductIntro";
import ProductDetails from "./ProductForm/ProductDetails";
import { useSelector } from "react-redux";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ProductAttributes from "./ProductForm/ProductAttributes";
import Submit from "./ProductForm/Submit";

const steps = [
  "Basic Information",
  "product Details",
  "product info",
  "Submit",
];
//form data
function MultiStepForm() {
  const { productDetails } = useSelector((state) => state.product);
  console.log(productDetails);
  const [formData, setFormData] = useState({
    name: "",
    catagory: "",
    description: "",
    brand: "",
    price: 10,
    stock: "",
    available: "hello",
    color: "#ffffff",
    size: 0,
    warranty: 0,
  });
  //initailly th rproduct details are null taht why i use this
  useEffect(() => {
    if (productDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...productDetails,
      }));
    }
  }, [productDetails]);
  //to take valyes from input fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  console.log(formData);
  //make api request to create new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/createproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/update/${productDetails._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //store step no in local storage
  const [activeStep, setActiveStep] = useState(
    parseInt(localStorage.getItem("activeStep")) || 0
  );
  useEffect(() => {
    localStorage.setItem("activeStep", activeStep);
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    localStorage.removeItem("activeStep");
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ProductIntro formData={formData} handleChange={handleChange} />;
      case 1:
        return (
          <ProductDetails formData={formData} handleChange={handleChange} />
        );
      case 2:
        return (
          <ProductAttributes formData={formData} handleChange={handleChange} />
        );
      case 3:
        return (
          <Submit
            handleUpdate={handleUpdate}
            handleSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box className="max-w-6xl mx-auto mt-16">
      <Stepper className="bg-gray-600 rounded-lg p-8" activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2, mb: 2 }}>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography>All steps completed youre finished</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box
              className="bg-gray-600 p-3 rounded-lg"
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
export default MultiStepForm;
