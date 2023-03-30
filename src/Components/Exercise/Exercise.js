import React, { useEffect, useState } from 'react';
import './Exercise.css'
import Product from '../Product/Product';

const Exercise = () => {
    const [products,setproduct] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(response => response.json())
        .then(data => setproduct(data))
    },[])
    return (
        <div className='exercise-container'>
            <div className="product-container">
                {
                    products.map(product =><Product 
                        key={product.id}
                        product={product}

                    ></Product>)
                }
            <p>Lorem ipsum dolor sit. {products.length}</p>
            </div>
            <div className="cart-container">
            <p>Lorem ipsum dolor sit</p>
            </div>
        </div>
    );
};

export default Exercise;