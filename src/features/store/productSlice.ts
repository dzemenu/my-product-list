import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export interface productState {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const initialState = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "...",
  images: [],
} as productState;
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addtoCart: (state: any, action: PayloadAction<productState>) => {
      return { ...state, action };
    },
  },
});
export const { addtoCart } = productSlice.actions;
export const selectCart = (state: RootState) => state.products;
export default productSlice.reducer;
