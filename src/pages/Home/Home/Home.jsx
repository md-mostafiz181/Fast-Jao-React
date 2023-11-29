import React from 'react';
import Header from '../Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Delivary from '../Delivary/Delivary';
import Company from '../Company/Company';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Delivary></Delivary>
            <Company></Company>
            
        </div>
    );
};

export default Home;