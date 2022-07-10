import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCard: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;
    },
  },
});
export const { addProductToCard } = cartSlice.actions;
export default cartSlice.reducer;
