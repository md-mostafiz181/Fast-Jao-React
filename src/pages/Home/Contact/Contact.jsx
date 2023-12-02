import React, { useEffect } from "react";
import person from "../../../assets/images/person1.png";
import "./Contact.css";
import { FaTruck } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Container from "../../../components/Container/Container";
import CountUp from "react-countup";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contact = () => {
  useEffect(()=>{
    AOS.init(); 
},[])
  return (
    <div id="contact-part">
      <Container>
        <div className="contact-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
          <div data-aos="fade-up" className="contact-form bg-white h-[510px] rounded-lg mt-2">
            <h1 className="lg:text-4xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor ps-6 py-10">
              Request a Quote{" "}
            </h1>

            <form action="" className="px-4">
              <input
                type="text"
                name="name"
                id="name"
                className="name primaryFont primaryTextColor mb-3"
                placeholder="Name"
              />

              <input
                type="number"
                name="phone"
                className="name primaryFont primaryTextColor mb-3"
                id="phone"
                placeholder="Phone..."
              />

              <input
                type="email"
                name="email"
                className="name primaryFont primaryTextColor mb-3"
                id="email"
                placeholder="Email..."
              />

              <select className="name primaryFont primaryTextColor mb-3">
                <option disabled selected>
                  Choose Service Type...
                </option>
                <option>Rail Cargo</option>
                <option>Shipping Cargo</option>
                <option>Road Fraight</option>
              </select>

              <button className="btn-submit">Request for submit</button>
            </form>
          </div>
          <div className="contact-details grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3  py-2 px-2">
            <div data-aos="flip-left" className="details-box flex justify-center items-center w-full">
              <FaTruck className="icon" />
              <h1 className="text-5xl primaryFont secondaryTextColor font-bold ">
                <CountUp end={8650} duration={5} />
              </h1>
              <h3 className="text-2xl secondaryFont primaryTextColor font-bold">
                Delivered Packages
              </h3>
              <div className="line"></div>
            </div>

            <div data-aos="flip-right" className="details-box flex justify-center items-center w-full">
              <FaGlobe className="icon" />
              <h1 className="text-5xl primaryFont secondaryTextColor font-bold ">
                <CountUp end={120} duration={5} />
              </h1>
              <h3 className="text-2xl secondaryFont primaryTextColor font-bold">
                Countries Covered
              </h3>
              <div className="line"></div>
            </div>

            <div data-aos="flip-up" className="details-box flex justify-center items-center w-full">
              <FaHouseChimneyWindow className="icon" />
              <h1 className="text-5xl primaryFont secondaryTextColor font-bold ">
                <CountUp end={2630} duration={5} />
              </h1>
              <h3 className="text-2xl secondaryFont primaryTextColor font-bold">
                Tons of Goods
              </h3>
              <div className="line"></div>
            </div>

            <div  data-aos="flip-down" className="details-box flex justify-center items-center w-full">
              <FaUser className="icon" />
              <h1 className="text-5xl primaryFont secondaryTextColor font-bold ">
                <CountUp end={1450} duration={5} />
              </h1>
              <h3 className="text-2xl secondaryFont primaryTextColor font-bold">
                Satisfied Client
              </h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
