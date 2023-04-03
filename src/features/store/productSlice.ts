import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
 export type productState = {
   [x: string]: any;
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
 };
 type CartState = {
   items: productState[];
   total: number;
 };

const initialState: CartState = {
  items: [],
  total: 0,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addtoCart(state: CartState, action: PayloadAction<productState>) {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart(state: CartState, action: PayloadAction<productState>) {
      state.total -= action.payload.price;
     state.items= state.items.filter((val) => val.id != action.payload.id);
    
    },
  },
});
export const { addtoCart, removeFromCart } = productSlice.actions;
export const selectCart = (state: RootState) => state.products;
export default productSlice.reducer;
