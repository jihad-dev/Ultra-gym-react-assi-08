import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props);
  const { name, img, seller, price, ratings } = props.product;


  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <p>price: ${price}</p>
        <p>
          <small>Seller:{seller}</small>
        </p>
        <p>
          <small>ratings:{ratings} stars</small>
        </p>
      </div>
      <button onClick={() => props.AddToProduct(props.product)}  className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
