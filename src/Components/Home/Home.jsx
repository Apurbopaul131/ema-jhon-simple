/* eslint-disable no-unused-vars */
import React from 'react';
import "./Home.css";
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;