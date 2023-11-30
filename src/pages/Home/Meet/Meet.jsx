import React from "react";
import "./Meet.css";
import team1 from "../../../assets/images/team01.jpg"
import team2 from "../../../assets/images/team02.jpg"
import team3 from "../../../assets/images/team03.jpg"
import Container from "../../../components/Container/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";

const Meet = () => {
  return (
    <div id="meet-part">
      <Container>
        <div className="meet-container flex flex-col sm:flex-row gap-3">
          <div className="meet-left w-full">
            <p className="lg:text-1xl md:text-xl sm:text-xl font-bold primaryFont secondaryTextColor text-right pr-6">
              Meet all members
            </p>
            <h1 className="lg:text-4xl md:text-4xl sm:text-3xl font-bold primaryFont primaryTextColor text-right mt-2 pr-6">
              Team members
            </h1>
          </div>
          <div className="meet-right w-full">
            <p className="px-3 secondaryFont text-[#303743]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              itaque praesentium animi eveniet. Sunt error aut expedita
              consectetur tenetur commodi reprehenderit debitis beatae vero,
              modi, similique laboriosam architecto nostrum velit.
            </p>
          </div>
        </div>


        <div className="team-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="team-item shadow-lg">
                <div className="team-item-img">
                    <img className="img" src={team1} alt="" />
                    <div className="overlay">
                        <div className="box-container flex justify-evenly">
                            <div className="box-item flex justify-center items-center">
                            <FaFacebookF />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaTwitter />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaInstagram />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaGooglePlus />
                            </div>
                        </div>
                    </div>

                    <h1 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor transition duration-300 hover:text-[#FF4800] cursor-pointer text-center mt-8">Alica Bendor</h1>

                    <p className="text-2xl font-bold secondaryFont primaryTextColor text-center">Engineer</p>

                </div>

                <div className="border"></div>
            </div>
            <div className="team-item shadow-lg">
                <div className="team-item-img">
                    <img className="img" src={team2} alt="" />
                    <div className="overlay">
                        <div className="box-container flex justify-evenly">
                            <div className="box-item flex justify-center items-center">
                            <FaFacebookF />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaTwitter />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaInstagram />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaGooglePlus />
                            </div>
                        </div>
                    </div>

                    <h1 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor transition duration-300 hover:text-[#FF4800] cursor-pointer text-center mt-8">Jason Marcol</h1>

                    <p className="text-2xl font-bold secondaryFont primaryTextColor text-center">Engineer</p>

                </div>

                <div className="border"></div>
            </div>
            <div className="team-item shadow-lg">
                <div className="team-item-img">
                    <img className="img" src={team3} alt="" />
                    <div className="overlay">
                        <div className="box-container flex justify-evenly">
                            <div className="box-item flex justify-center items-center">
                            <FaFacebookF />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaTwitter />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaInstagram />
                            </div>
                            <div className="box-item flex justify-center items-center">
                            <FaGooglePlus />
                            </div>
                        </div>
                    </div>

                    <h1 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor transition duration-300 hover:text-[#FF4800] cursor-pointer text-center mt-8">Taylor Mark</h1>

                    <p className="text-2xl font-bold secondaryFont primaryTextColor text-center">Engineer</p>

                </div>

                <div className="border"></div>
            </div>

        </div>
      </Container>
    </div>
  );
};

export default Meet;
