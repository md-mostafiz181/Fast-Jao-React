import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import ship from "../../../assets/images/ship.png";
import "./Footer.css";
import Container from "../../../components/Container/Container";

const Footer = () => {
  return (
    <div id="footer-part">
      <Container>
        <div className="footer-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
          <div className="footer-item  h-[400px] ps-2">
            <h1 className="text-4xl font-bold primaryFont secondaryTextColor">
              Red<span className="text-white">X</span>
            </h1>

            <p className="text-2xl font-bold text-[#a7a8b4] mt-10">
              {" "}
              97691 21552
            </p>
            <p className="text-2xl font-bold text-[#a7a8b4] my-4">
              info@redx.com
            </p>
            <p className="text-2xl font-bold text-[#a7a8b4]">www.redx.com</p>

            <div className="bottom-icon flex justify-between">
              <div className="bottom-item flex justify-center items-center">
                <FaFacebookF />
              </div>
              <div className="bottom-item flex justify-center items-center">
                <FaTwitter />
              </div>
              <div className="bottom-item flex justify-center items-center">
                <FaInstagram />
              </div>
              <div className="bottom-item flex justify-center items-center">
                <FaGooglePlus />
              </div>
            </div>
          </div>
          <div className="footer-item  h-[400px]">
            <h2 className="text-2xl font-bold primaryFont text-white ">
              Services
            </h2>

            <div className="flex mt-4">
              <div className="mt-2 me-3 text-white">
                <FaArrowCircleRight />
              </div>
              <div>
                <p className="text-xl font-bold primaryFont text-[#a7a8b4]">
                  Air Freight
                </p>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="mt-2 me-3 text-white">
                <FaArrowCircleRight />
              </div>
              <div>
                <p className="text-xl font-bold primaryFont text-[#a7a8b4]">
                  Ocean Freight
                </p>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="mt-2 me-3 text-white">
                <FaArrowCircleRight />
              </div>
              <div>
                <p className="text-xl font-bold primaryFont text-[#a7a8b4]">
                  {" "}
                  Ocean Freight
                </p>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="mt-2 me-3 text-white">
                <FaArrowCircleRight />
              </div>
              <div>
                <p className="text-xl font-bold primaryFont text-[#a7a8b4]">
                  Road Freight
                </p>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="mt-2 me-3 text-white">
                <FaArrowCircleRight />
              </div>
              <div>
                <p className="text-xl font-bold primaryFont text-[#a7a8b4]">
                  Warehousing
                </p>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="mt-2 me-3 text-white">
                <FaArrowCircleRight />
              </div>
              <div>
                <p className="text-xl font-bold primaryFont text-[#a7a8b4]">
                  Supply Chain
                </p>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="mt-2 me-3 text-white">
                <FaArrowCircleRight />
              </div>
              <div>
                <p className="text-xl font-bold primaryFont text-[#a7a8b4]">
                  Packaging
                </p>
              </div>
            </div>
          </div>
          <div className="footer-item  h-[400px]">
            <h2 className="text-2xl font-bold primaryFont text-white ">
              Newsletter
            </h2>

            <p className="text-1xl font-bold primaryFont mt-5 text-[#a7a8b4]">
              Seamlessly visualize quality intellectual capital without superior
              collaboration and idea sharing listically
            </p>

            <input type="email" name="" id="" placeholder="Enter your email" />

            <button className="btn-submit">Submit Now</button>

            <div className="ship">
              <img src={ship} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
