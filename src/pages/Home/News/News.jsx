import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import news1 from "../../../assets/images/latest1.jpg"
import news2 from "../../../assets/images/latest2.jpg"
import news3 from "../../../assets/images/latest3.jpg"
import news4 from "../../../assets/images/latest.jpg"
import news5 from "../../../assets/images/news5.jpg"

import "./News.css";
import Container from "../../../components/Container/Container";

const News = () => {
  return (
    <div id="news-part">
      <Container>
        <p className="text-1xl font-bold primaryFont secondaryTextColor ps-20 mb-3">
          News And Updates
        </p>
        <h1 className="lg:text-5xl md:text-2xl sm:text-1xl font-bold primaryFont text-white">
          Let's Checkout our All Latest <br /> News
        </h1>

        {/* swiper js start from here */}

        <div className="news-container  mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className="news1">
                    <img src={news1} alt="" />
                    <div className="overlay">
                        <h1 className="primaryFont font-bold lg:text-3xl md:text-2xl sm:text-2xl text-white text-center pt-[200px]">Cargo Shipping</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="news1">
                    <img src={news2} alt="" />
                    <div className="overlay">
                        <h1 className="primaryFont font-bold lg:text-3xl md:text-2xl sm:text-2xl text-white text-center pt-[200px]">Port Shipping</h1>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
            <div className="news1">
                    <img src={news3} alt="" />
                    <div className="overlay">
                        <h1 className="primaryFont font-bold lg:text-3xl md:text-2xl sm:text-2xl text-white text-center pt-[200px]">Ocean Cargo</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="news1">
                    <img src={news4} alt="" />
                    <div className="overlay">
                        <h1 className="primaryFont font-bold lg:text-3xl md:text-2xl sm:text-2xl text-white text-center pt-[200px]">Air Shipping Cargo</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="news1">
                    <img src={news1} alt="" />
                    <div className="overlay">
                        <h1 className="primaryFont font-bold lg:text-3xl md:text-2xl sm:text-2xl text-white text-center pt-[200px]">Cargo Shipping</h1>
                    </div>
                </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default News;
