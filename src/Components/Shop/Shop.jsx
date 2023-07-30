/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
            const data = await res.json();
            setProducts(data);
        }
        loadData();
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map((product)=><Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='product-summary'>
                <h3>product summary</h3>
            </div>
        </div>
    );
};

export default Shop;