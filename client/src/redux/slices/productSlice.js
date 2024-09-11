import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: null,
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    storeProductDetails: (state, actions) => {
      state.productDetails = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeProductDetails } = productSlice.actions;

export default productSlice.reducer;
