import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productState } from "../store/productSlice";

export const productApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<productState, string>({
      query: () => "/products",
    }),
    getByCategory: builder.query<productState, string>({
      query: (name) => `/products/category/${name}`,
    }),
  }),
});
export const { useGetAllProductsQuery, useGetByCategoryQuery } = productApi;
