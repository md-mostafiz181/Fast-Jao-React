import React, { useEffect } from 'react';
import personImg from "../../../assets/images/good person.png"
import "./Choose.css"
import Container from '../../../components/Container/Container';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Choose = () => {
    useEffect(()=>{
        AOS.init(); 
    },[])
    return (
        <div id='choose-part'>

          
                    <Container>
                        <div className="choose-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                            <div data-aos="fade-right" className="choose-left h-[400px]">
                                <img className='person' src={personImg} alt="" />
                            </div>
                            <div data-aos="fade-left" className="choose-right h-[400px] ps-2">
                                <p className='text-1x secondaryFont text-white font-normal ps-20'>Why Choose Us?</p>

                                <h1 className='lg:text-5xl md:text-3xl sm:text-2xl font-bold primaryFont text-white mt-7 mb-5'>We Deliver your goods <br /> Very Fast & Secure</h1>


                                <h5 className='text-1xl font-normal secondaryFont text-white mt-10'>Distinctively exploit optimal alignments for intuitive. Quickly coordinate business applications through revolutionary cataly technologies rather than development optimal alignments for intuitive business applications through</h5>

                                
                            </div>
                        </div>
                    </Container>


 

            
        </div>
    );
};

export default Choose;