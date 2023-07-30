/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="/invetory">Invetory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;