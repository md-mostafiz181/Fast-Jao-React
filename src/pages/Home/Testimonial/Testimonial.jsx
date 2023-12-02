import React, { useEffect } from "react";
import testimonial1 from "../../../assets/images/testimonial1.jpg";
import testimonial2 from "../../../assets/images/testimonial2.jpg";
import testimonial3 from "../../../assets/images/testimonial3.jpg";
import { FaStar } from "react-icons/fa";
import { FaTruckDroplet } from "react-icons/fa6";
import "./Testimonial.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Container from "../../../components/Container/Container";

const Testimonial = () => {
  
  useEffect(()=>{
    AOS.init(); 
},[])
  return (
    <div id="testimonial-part">
      <Container>
        <p className="text-2xl primaryFont secondaryTextColor text-center">
          Testimonials
        </p>

        <h1 className="lg:text-5xl md:text-3xl sm:text-2xl font-bold primaryFont primaryTextColor text-center mt-5">
          What People and Clients Think <br /> About Us?
        </h1>

        <div className="testimonial-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
          <div data-aos="flip-left" className="item">

           
            <div className="test1 shadow-lg">

            <div className="box flex justify-center items-center text-3xl text-white">
              <FaTruckDroplet />
            </div>

                
              <div className="img-box">
                <img src={testimonial1} alt="" />
              </div>
              <h3 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold primaryFont text-center primaryTextColor pt-[200px] mb-3">Aurther Maxwell</h3>
              <h4 className="lg:text-2xl md:text-1xl sm:text-1xl font-normal secondaryTextColor secondaryFont text-center">CEO, Apple Inc.</h4>
              <div className="icons flex justify-center items-center mt-2 text-2xl text-[#FF4800]">
                  <FaStar /> <FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <p className="text-1xl font-normal primaryFont primaryTextColor text-center mt-2 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolore voluptate aliquid est corrupti aut sit dicta. Ad, eveniet numquam?</p>
            </div>
          </div>


          <div data-aos="flip-up"  className="item">
            <div className="test1 shadow-lg">
            <div className="box flex justify-center items-center text-3xl text-white">
              <FaTruckDroplet />
            </div>
              <div className="img-box">
                <img src={testimonial2} alt="" />
              </div>
              <h3 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold primaryFont text-center primaryTextColor pt-[200px] mb-3">Jany kate</h3>
              <h4 className="lg:text-2xl md:text-1xl sm:text-1xl font-normal secondaryTextColor secondaryFont text-center">CEO, Apple Inc.</h4>
              <div className="icons flex justify-center items-center mt-2 text-2xl text-[#FF4800]">
                  <FaStar /> <FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <p className="text-1xl font-normal primaryFont primaryTextColor text-center mt-2 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolore voluptate aliquid est corrupti aut sit dicta. Ad, eveniet numquam?</p>
            </div>
          </div>


          <div data-aos="flip-right" className="item">
            <div className="test1 shadow-lg">
            <div className="box flex justify-center items-center text-3xl text-white">
              <FaTruckDroplet />
            </div>
              <div className="img-box">
                <img src={testimonial3} alt="" />
              </div>
              <h3 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold primaryFont text-center primaryTextColor pt-[200px] mb-3">Farnandege</h3>
              <h4 className="lg:text-2xl md:text-1xl sm:text-1xl font-normal secondaryTextColor secondaryFont text-center">CEO, Apple Inc.</h4>
              <div className="icons flex justify-center items-center mt-2 text-2xl text-[#FF4800]">
                  <FaStar /> <FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <p className="text-1xl font-normal primaryFont primaryTextColor text-center mt-2 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolore voluptate aliquid est corrupti aut sit dicta. Ad, eveniet numquam?</p>
            </div>
          </div>




        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
