import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../features/api/apiSlice";
import ProductItem from "./ProductItem";
export default function ProductList() {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetAllProductsQuery();
  //useGetByCategoryQuery("smartphones");
  const [searchValue, setSearchValue] = useState("");
  const [searchProducts, setSearchProducts] = useState(data);
  console.log("searchProducts", isSuccess, searchProducts);
  useEffect(() => {}, [data]);
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    setSearchProducts(
      searchProducts?.products.filter((v: { title: string | string[] }) =>
        v.title.includes(searchValue)
      )
    );
  };
  return (
    <div className="flex m-10  flex-col justify-center items-center">
      <input
        type="text"
        placeholder="search here"
        className="input w-1/2 "
        value={searchValue}
        onChange={searchHandler}
      />
      <div
        className="m-10    rounded-box 
    grid grid-cols-1 md:grid-cols-3 gap-10 "
      >
        {isLoading && <h3>....loading</h3>}
        {isFetching && <h3>....fetching</h3>}
        {error && <h3>error</h3>}
        {isSuccess &&
          data.products.map((p: any) => <ProductItem key={p.id} {...p} />)}
      </div>
    </div>
  );
}