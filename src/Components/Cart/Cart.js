import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    for(const product of cart){
        total = total + product.price;
        
    }


    return (
        <div className='cart'>
            <p>order Summery</p>
            <p>Selected items {cart.length}</p>
            <p>Total Price : {total}</p>
        
        </div>
    );
};

export default Cart;