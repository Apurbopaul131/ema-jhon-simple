/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Orderinfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons'
const Orderinfo = ({ cart }) => {
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    //using objece destruce take two property from cart componnet props
    //callculate total,grandTotal,tax and shipping
    cart.forEach((product) => {
        totalPrice += product.price;
        totalShipping += product.shipping;
    });
    const tax = totalPrice * 0.07;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='order-info'>
            <h4>Order Summery</h4>
            <div className="side-info">
                <p>Selacted Itmes:{cart.length}</p>
                <p>Total Price:${totalPrice.toFixed(2)}</p>
                <p>Total Shipping Charge:${totalShipping}</p>
                <p>Tax:${tax.toFixed(2)}</p>
                <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
            </div>
            <div className="button-container">
                <button className="clear-cart">Clear cart
                    <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faTrash} />
                </button>
            </div>
            <div className="button-container">
                <button className="review-cart">Review Cart
                    <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faArrowCircleRight} />
                </button>
            </div>
        </div>
    );
};

export default Orderinfo;