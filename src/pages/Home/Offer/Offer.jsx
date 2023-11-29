import React from 'react';
import "./Offer.css"
import Container from '../../../components/Container/Container';

const Offer = () => {
    return (
        <div id='offer-part'>
            <Container>
                <div className="offer-container flex flex-col sm:flex-row gap-3">
                    <div className="offer-left w-full">
                        <p className='lg:text-1xl md:text-xl sm:text-xl font-bold primaryFont text-white text-right pr-6'>All Our Services</p>
                        <h1 className='lg:text-4xl md:text-2xl sm:text-2xl font-bold primaryFont text-white text-right mt-2 pr-6'>Service We Offer</h1>
                    </div>
                    <div className="offer-right w-full">
                        <p className='px-3 secondaryFont text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque praesentium animi eveniet. Sunt error aut expedita consectetur tenetur commodi reprehenderit debitis beatae vero, modi, similique laboriosam architecto nostrum velit.</p>
                    </div>
                </div>
            </Container>
            
        </div>
    );
};

export default Offer;