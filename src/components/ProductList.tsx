import React from "react";
import {
  useGetAllProductsQuery,
  useGetByCategoryQuery,
} from "../features/api/apiSlice";
import ProductItem from "./ProductItem";
export default function ProductList() {
  const { data, error, isLoading, isFetching, isSuccess } =
  useGetAllProductsQuery()
    //useGetByCategoryQuery("smartphones");
  return (
    <div
      className="m-20  justify-center items-center  rounded-box 
    grid grid-cols-3 gap-10 "
    >
      {isLoading && <h3>....loading</h3>}
      {isFetching && <h3>....fetching</h3>}
      {error && <h3>error</h3>}
      {isSuccess &&
        data.products.map((p) => (
          <ProductItem
            key={p.id}
            images={p.images}
            title={p.title}
            description={p.description}
            price={p.price}
          />
        ))}
    </div>
  );
}
