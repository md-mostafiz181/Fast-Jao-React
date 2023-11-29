import React, { useEffect, useState } from 'react';
import "./OfferCart.css"
import Container from '../../../components/Container/Container';
import SingleCart from '../SingleCart/SingleCart';
// import { data } from 'autoprefixer';

const OfferCart = () => {

    const [carts,setCarts]=useState([])
    useEffect(()=>{
        fetch('offer.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    return (
        <div id='offer-cart'>
            <Container>
                <div className="offer-cart-container ">
                    <div className="offer-cart-item grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        {
                            carts.map(cart => <SingleCart
                            key={cart.id}
                            cart={cart}
                            ></SingleCart>)
                        }

                        
                    </div>
                </div>
            </Container>
            
        </div>
    );
};

export default OfferCart;