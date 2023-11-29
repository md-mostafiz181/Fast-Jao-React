import React from "react";
import img from "../../../assets/images/banner.jpg";
import delivary from "../../../assets/images/delivary.jpg";
import { FaTruck } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import "./Delivary.css";
import Container from "../../../components/Container/Container";

const Delivary = () => {
  return (
    <div id="delivary-part">
      <Container>

        <div className="delivery-head hidden sm:block">
            <p className="lg:text-2xl md:text-2xl sm:text-1xl secondaryFont secondaryTextColor text-center">Our Delivery</p>
            <h1 className="lg:text-5xl primaryFont primaryTextColor font-bold text-center mb-4">This is our super <br /> delivery system</h1>
        </div>
        <div className="delivary-container flex flex-col lg:flex-row justify-between gap-2">
          <div className="delivary-left">
                <div className="semi-box flex-col lg:flex-row flex justify-between gap-2">
                            <div className="box-1 w-[350px] h-[230px] ms-1 rounded-lg ">
                        <img src={img} alt="" />
                        <div className="overlay">
                            <div className="inner-box">
                            <div className="icon flex justify-center items-center pt-4">
                                <FaTruck />
                            </div>
                            <h3 className="lg:text-2xl md:text-2xl sm:text-xl font-bold text-center text-white primaryFont mt-3">
                                On Time Delivery
                            </h3>
                            <p className="text-xl text-center font-normal secondaryFont text-white mt-2">
                                We always provide people a complete solution focused of any
                                business.
                            </p>
                            </div>
                        </div>
                        </div>


                        <div className="box-1 w-[350px] h-[230px] ms-1 rounded-lg ">
                <img src={img} alt="" />
                <div className="overlay">
                  <div className="inner-box">
                    <div className="icon flex justify-center items-center pt-4">
                      <FaGlobeAfrica />
                    </div>
                    <h3 className="lg:text-2xl md:text-2xl sm:text-xl font-bold text-center text-white primaryFont mt-3">
                      Global Service
                    </h3>
                    <p className="text-xl text-center font-normal secondaryFont text-white mt-2">
                      We always provide people a complete solution focused of
                      any business.
                    </p>
                  </div>
                </div>
              </div>
                </div>
            <div>

            </div>
          </div>
          <div className="delivary-right ms-1">
            <img src={delivary} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Delivary;
