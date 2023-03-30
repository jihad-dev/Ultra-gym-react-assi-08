import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, seller, price, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <p>${price}</p>
        <p><small>{seller}</small></p>
        <p><small>{ratings} stars</small></p>
      </div>
      <button className="btn-cart">
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;
