/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {
        name,
        seller,
        price,
        img,
        ratings
    } = props.product;
    
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>price:${price}</p>
                    <p>Manufacturer:{seller}</p>
                    <p>Rating:{ratings}star</p>
            </div>
            <button className="btn">Add to cart</button>
        </div>
    );
};

export default Product;