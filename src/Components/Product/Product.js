import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { name, img, text,Time_required } = props.product;


  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <h3>{name}</h3>
        {/* <p>price: ${price}</p> */}
        <p>
          <small>{text}</small>
        </p>
        <p>
          <small>Time required :{Time_required}</small>
        </p>
      </div>
      <button onClick={() => props.AddToProduct(props.product)}  className="btn-cart">
        <p className="btn-text">Add To Cart</p>
       
      </button>
    </div>
  );
};

export default Product;
