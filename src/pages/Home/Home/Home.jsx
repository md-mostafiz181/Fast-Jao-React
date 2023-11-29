import React from 'react';
import Header from '../Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            
        </div>
    );
};

export default Home;