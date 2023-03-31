import React, { useEffect, useState } from 'react';
import './Exercise.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Exercise = () => {
    const [products,setproduct] = useState([]);
    const [cart,setcart] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(response => response.json())
        .then(data => setproduct(data))
    },[])


   // handle button click //
    const AddToProduct = (product) => {
        console.log(product);
        const newCart = [...cart,product];
        setcart(newCart);
      };


    return (
        <div className='exercise-container'>
            <div className="product-container">
                {
                    products.map(product =><Product 
                        key={product.id}
                        product={product}
                        AddToProduct={AddToProduct}

                    ></Product>)
                }
            <p>Lorem ipsum dolor sit. {products.length}</p>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Exercise;