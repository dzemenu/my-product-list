import React from "react";

function ProductItem({ images, title, price, description }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl h-96 carousel-item flex">
      <figure>
        <img src={images[0]} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{price}Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
