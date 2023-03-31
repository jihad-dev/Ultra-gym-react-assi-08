import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);
  let exercise = 0;
  let newexercise = parseFloat(exercise);

  for (const product of cart) {
    let producttotal = parseInt(product.Time_required);

    exercise = exercise + newexercise + producttotal;
  }

  return (
    <div className="cart">
      <h2>Exercise Details</h2>
      <p className="exercise-texts">75kg Weight   6.5 Height 25yrs Age</p>
      <p className="exercise-round">
   
        <p className="circle">10s</p>
        <p className="circle">20s</p>
        <p className="circle">30s</p>
        <p className="circle">40s</p>
        <p className="circle">50s</p>
    
      </p>
      <p className="exercise-text">Selected items {cart.length}</p>
      <p className="exercise-text">Exercise time : {exercise} seconds</p>
      <button className="exercise-text">Activity Completed</button>
    </div>
  );
};

export default Cart;
