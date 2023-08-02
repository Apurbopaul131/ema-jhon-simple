/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';
import Orderinfo from '../Orderinfo/Orderinfo';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { addToLocalStorage, getShoppingCart } from '../Utilities/fakeDB';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
            const data = await res.json();
            setProducts(data);
        }
        loadData();
    },[])
    //Objective:- Stored minimum data in the local storage
    useEffect(()=>{
        //step 01: take cart from shopping cart
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 02:use for in loop get id from local storage.
        for(const id in storedCart){
            //step 03: using localStorage id find product from products state
            const addedProduct = products.find((product)=>product.id === id);
            if(addedProduct){
                //callculate quantity from localStorage product
                const Quantity = storedCart[id];
                // Set quantity in the product state
                addedProduct.quantity = Quantity;
                // push into the array
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        
    },[products])
    const callculateOrderSummery = (orderData) =>{
        console.log(orderData);
    }
    const addTocart = (cardData) =>{
        const newCart = [...cart,cardData];
        setCart(newCart);
        addToLocalStorage(cardData.id);
        
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map((product)=><Product key={product.id} product={product} addTocart={addTocart}></Product>)
                }
            </div>
            <div className='product-summary'>
                <Orderinfo cart={cart}></Orderinfo>
            </div>
        </div>
    );
};

export default Shop;