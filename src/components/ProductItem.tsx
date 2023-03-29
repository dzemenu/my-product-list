import React from "react";
import { useDispatch } from "react-redux";
import { addtoCart, productState } from "../features/store/productSlice";

function ProductItem( product :productState) {
  const { images, title, price, description } = product;
  const dispatch = useDispatch();
 
  const itemHandler=()=>{
    dispatch(addtoCart(product))
   
  }
  return (
    <div className="card w-50 bg-base-100 shadow-xl h-96 ">
      <figure>
        <img src={images[0]} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {price}
          <button
            className="btn btn-primary"
            onClick={itemHandler}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
