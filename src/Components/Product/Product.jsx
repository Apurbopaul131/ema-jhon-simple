/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {
        name,
        seller,
        price,
        img,
        ratings
    } = props.product;
    const addTocart = props.addTocart;
    
    
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
            <button className="btn" onClick={()=>addTocart(props.product)}>Add to cart
            <FontAwesomeIcon style={{marginLeft:"5px"}} icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;