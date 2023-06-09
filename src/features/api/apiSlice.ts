import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productState } from "../store/productSlice";

export const productApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => "/products",
    }),
    getByCategory: builder.query<productState[], string>({
      query: (name) => `/products/category/${name}`,
    }),
    addProduct:builder.mutation<productState, Partial<productState>>({
      query:(body)=>({
 url:'add',
 method:'POST',
 body
      }),
    })
  }),
});
export const { useGetAllProductsQuery, useGetByCategoryQuery,useAddProductMutation } = productApi;
