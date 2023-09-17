/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./ReviewInfo.css";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewInfo = ({ product,deleteCartItem }) => {
    const { id,img, name, quantity, price } = product;
    return (
        <div className='product-review-cart'>
            <div className='review-total-info'>
                <div className="product-review-img">
                    <img src={img} alt="" />
                </div>
                <div className="product-review-info">
                    <p>{name}</p>
                    <span>Price:${price}</span>
                    <br />
                    <span>Quantity:{quantity}</span>
                </div>
            </div>
            <button className='btn-delete' onClick={()=>deleteCartItem(id)}>
                <FontAwesomeIcon icon={faTrashAlt} style={{color:'#EB5757'}}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewInfo;