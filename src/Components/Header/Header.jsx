/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../images/Logo.svg';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/order">Order</Link>
                <Link to="/review">Review</Link>
                <Link to="/inventory">Invetory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};Link
export default Header;