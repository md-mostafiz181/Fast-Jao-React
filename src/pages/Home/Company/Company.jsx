import React, { useEffect } from 'react';
import "./Company.css"
import trust1 from "../../../assets/images/trust1.jpg"
import trust2 from "../../../assets/images/trust2.jpg"
import signature from "../../../assets/images/signature.png"
import Container from '../../../components/Container/Container';
import CountUp from 'react-countup';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Company = () => {
    useEffect(()=>{
        AOS.init(); 
    },[])
    return (
        <div id='company-part'>

            <Container>
            <div className="company-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto">
                    <div data-aos="fade-right" className="left w-full">
                        <img src={trust1} alt="" />

                        <div className="counter-box shadow-lg px-5 py-5">
                            <h1 className='lg:text-6xl md:text-2xl sm:text01xl primaryFont primaryTextColor font-bold text-center pt-3'>
                                <CountUp
                                end={51}
                                duration={3}
                                /> +
                            </h1>
                            <p className='lg:text-1xl md:text-1xl sm:text-xl font-normal secondaryFont secondaryTextColor text-center'>We have more than years of experience</p>


                        </div>
                        <div className="side-img hidden sm:block">
                            <img src={trust2} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-left" className="right w-full">
                        <p className='top primaryFont secondaryTextColor font-noraml lg:text-1xl md:text-1xl sm:text-xl ps-20 mb-2'>About Our Company</p>
                        <h1 className='lg:text-5xl md:text-3xl sm:text-2xl primaryFont font-bold primaryTextColor'>Trust Logistic <br /> Survice Provider</h1>
                        <li>revolutionary catalysts for chang</li>
                        <li>catalysts for chang the Seamlessly </li>
                        <li>business applications through</li>
                        <li>procedures whereas processes</li>
                        <p className='lg:text-1xl md:text-1xl sm:text-xl font-bold primaryFont primaryTextColor mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam, esse, quis sequi impedit aperiam nihil dolorum aliquid porro quos animi beatae maiores ullam enim quod quibusdam deleniti? Laboriosam, laborum!</p>

                        <div className='lower flex'>
                            <button className='btn-read uppercase font-bold text-white mt-5'>Read More </button> 
                            <img src={signature} alt="" />
                            
                        </div>
                            
                        
                    </div>
                </div>

            </Container>
      

          
            
        </div>
    );
};

export default Company;