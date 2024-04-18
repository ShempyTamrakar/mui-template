import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../../redux/store";
import { IProductList } from './modal/interface';

const initialState: IProductList[] = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {  } = productSlice.actions;

export const userSelector = (state: RootState) => state.userReducer;

export default productSlice.reducer;
