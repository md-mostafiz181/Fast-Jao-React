import React from 'react';
import Header from '../Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Delivary from '../Delivary/Delivary';
import Company from '../Company/Company';
import Offer from '../Offer/Offer';
import OfferCart from '../OfferCart/OfferCart';
import Contact from '../Contact/Contact';
import Meet from '../Meet/Meet';
import News from '../News/News';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Delivary></Delivary>
            <Company></Company>
            <Offer></Offer>
            <OfferCart></OfferCart>
            <Contact></Contact>
            <Meet></Meet>
            <News></News>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;