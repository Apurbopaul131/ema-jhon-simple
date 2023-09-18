/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Review.css";
import { useLoaderData } from 'react-router-dom';
import Orderinfo from '../Orderinfo/Orderinfo';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { getShoppingCart } from '../Utilities/fakeDB';

const Review = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    //This function used for clear review route item
    const handleDeleteCartItem = (productId) => {
        removeFromDb(productId);
        const remaingCart = cart.filter((pd) => pd.id !== productId);
        setCart(remaingCart);
    }
    const handleClearCart = () => {
        deleteShoppingCart();
        setCart([]);
    }
    return (
        <div className='review-container'>
            <div className="product-view">
                {
                    cart.map((product) => <ReviewInfo
                        key={product.id}
                        product={product}
                        deleteCartItem={handleDeleteCartItem} />)
                }
            </div>
            <div className="order-view product-summary">
                <Orderinfo
                    cart={cart}
                    handleClearCart={handleClearCart}
                    isShop={false}
                />
            </div>
        </div>
    );
};

export default Review;