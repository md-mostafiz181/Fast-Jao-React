import React, { useEffect } from "react";
import img1 from "../../../assets/images/latest1.jpg"
import img2 from "../../../assets/images/latestbiman.jpg"
import img3 from "../../../assets/images/latestgari.jpg"
import innerImg1 from "../../../assets/images/testimonial1.jpg"
import innerImg2 from "../../../assets/images/testimonial2.jpg"
import innerImg3 from "../../../assets/images/testimonial3.jpg"
import { FaRegComments } from "react-icons/fa";
import "./Update.css";
import Container from "../../../components/Container/Container";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Update = () => {
    useEffect(()=>{
        AOS.init(); 
    },[])
  return (
    <div id="update-part">
      <Container>
        <div className="ps-2">
          <p className="text-1x secondaryFont secondaryTextColor font-bold ps-20 capitalize">
            News and updates
          </p>

          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl font-bold primaryFont primaryTextColor mt-7 mb-5">
          Let's Checkout our All <br /> Latest News
          </h1>

        </div>


        <div className="update-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
            <div data-aos="zoom-in" className="update-item shadow-lg">
                <div className="img-box">
                    <img src={img1} alt="" />
                </div>

                <h2 className="ps-4 lg:text-2xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor  mt-6">Distinctively revolutionary exploit catalysts for chang the Seamlessly</h2>

                <hr />

               <div className="bottom-container flex justify-between">
                <div className="bottom-item flex justify-evenly  h-[100px]">
                    <div className="inner-box">
                        <img src={innerImg1} alt="" />
                    </div>
                    <div><h1 className="mt-10 text-1xl font-bold secondaryFont secondaryTextColor">Admin</h1></div>
                </div>
                <div className="bottom-item flex h-[100px]">

                    <div className="icon"><FaRegComments /></div>
                   <div><h6 className="ps-16 text-1xl primaryFont primaryTextColor mt-10">  5 comments</h6></div>
                </div>

               
               </div>  
            </div>

            <div data-aos="zoom-in" className="update-item shadow-lg">
                <div className="img-box">
                    <img src={img2} alt="" />
                </div>

                <h2 className="ps-4 lg:text-2xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor  mt-6">Distinctively revolutionary exploit catalysts for chang the Seamlessly</h2>

                <hr />

               <div className="bottom-container flex justify-between">
                <div className="bottom-item flex justify-evenly  h-[100px]">
                    <div className="inner-box">
                        <img src={innerImg2} alt="" />
                    </div>
                    <div><h1 className="mt-10 text-1xl font-bold secondaryFont secondaryTextColor">Admin</h1></div>
                </div>
                <div className="bottom-item flex h-[100px]">

                    <div className="icon"><FaRegComments /></div>
                   <div><h6 className="ps-16 text-1xl primaryFont primaryTextColor mt-10">  9 comments</h6></div>
                </div>

               
               </div>  
            </div>

            <div data-aos="zoom-in" className="update-item shadow-lg">
                <div className="img-box">
                    <img src={img3} alt="" />
                </div>

                <h2 className="ps-4 lg:text-2xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor  mt-6">Distinctively revolutionary exploit catalysts for chang the Seamlessly</h2>

                <hr />

               <div className="bottom-container flex justify-between">
                <div className="bottom-item flex justify-evenly  h-[100px]">
                    <div className="inner-box">
                        <img src={innerImg3} alt="" />
                    </div>
                    <div><h1 className="mt-10 text-1xl font-bold secondaryFont secondaryTextColor">Admin</h1></div>
                </div>
                <div className="bottom-item flex h-[100px]">

                    <div className="icon"><FaRegComments /></div>
                   <div><h6 className="ps-16 text-1xl primaryFont primaryTextColor mt-10">  2 comments</h6></div>
                </div>

               
               </div>  
            </div>
 

            
        </div>
      </Container>
    </div>
  );
};

export default Update;
