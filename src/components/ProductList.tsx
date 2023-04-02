import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../features/api/apiSlice";
import { AddForm } from "./AddForm";
import ProductItem from "./ProductItem";
export default function ProductList() {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetAllProductsQuery();
  //useGetByCategoryQuery("smartphones");
  const [searchValue, setSearchValue] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const searchHandler = (e: any) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    setSearchProducts(
      data?.products.filter((v: { title: string }) =>
        v.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };
useEffect(()=>{},[searchProducts,searchValue])
  return (
    <div>
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
          {isSuccess && searchProducts.length>0 ? 
            searchProducts?.map((p: any) => <ProductItem key={p.id} {...p} />):data?.products.map((p: any) => <ProductItem key={p.id} {...p} />)}
        </div>
      </div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <AddForm />
          
        </div>
      </div>
      <div className="sticky bottom-0 right-0 h-16 w-26">
        <label htmlFor="my-modal-3" className="btn">
          Add New item
        </label>
      </div>
    </div>
  );
}
