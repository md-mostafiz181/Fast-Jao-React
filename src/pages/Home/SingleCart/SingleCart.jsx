import React, { useEffect, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Modal from "react-modal";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import "./SingleCart.css";
import Container from "../../../components/Container/Container";

const SingleCart = (props) => {

    useEffect(()=>{
      AOS.init(); 
  },[])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { id, image, title, short_description, brief_description } = props.cart;

  return (
    <div id="single-cart">
      <div  data-aos="zoom-in" className="single-cart shadow-lg">
        <div className="img">
          <img src={image} alt="" />
          <div className="overlay"></div>
        </div>

        <div className="box flex justify-center items-center text-3xl text-white">
          <FaPlaneDeparture />
        </div>

        <h1 className="text-center mt-2 lg:text-4xl md:text-2xl sm:text-1xl primaryFont font-bold primaryTextColor mb-2 ">
          {title}
        </h1>

        <h4 className="px-3 text-[#989898] text-1xl font-normal">
          {short_description}
        </h4>

        <div className="globe flex justify-center items-center text-8xl text-[#FF7F4C]">
          <FaGlobe />
        </div>

        <button
          onClick={openModal}
          className="btn-read secondaryFont secondaryTextColor font-normal"
        >
          Read More
        </button>
      </div>

      <Container>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Teacher Details"
          className="w-full shadow-lg hidden sm:block"
        >
          <div className="text-center ">
            <div className="flex justify-center items-center mt-10 pt-5">
              <img src={image} alt="" />
            </div>

            <h2 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold mt-3 primaryFont uppercase">
              {title}
            </h2>
            <p className="lg:text-xl md:text-xl sm:text-xl secondaryFont secondaryTextColor  mb-3 mt-3 text-left">
              {short_description}
            </p>
            <p className="text-1xl secondaryFont text-left ">
              {brief_description}
            </p>

            <button className="btn-close flex justify-center items-center  font-bold " onClick={closeModal}>
              <FaAngleDoubleLeft />
            </button>
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default SingleCart;
