import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../api/apiSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
