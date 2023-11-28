import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Banner.css"
import { Navigation } from 'swiper/modules';
import Container from '../../../components/Container/Container';

const Banner = () => {
    return (
        <div id='banner-part'>
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className='img1'>
                                <Container>
                                    <div>
                                      
                                           <p className='lg:text-8xl md:text-4xl sm:text-4xl  font-bold  text-white'>Enjoy! Hassle Free</p>
                                           <p className='lg:text-8xl md:text-4xl sm:text-4xl  font-bold  text-white'> Delivery Services</p>
                                        

                                        <p className='lg:text-2xl md:text-2xl sm:text-2xl mt-4 secondaryFont font-normal text-white'>We have almost 35+ years of experience for <br /> providing consulting services solutions</p>

                                        <button className='btn-get mt-3 font-bold primaryFont text-white primaryBg  rounded-md '>Get Quote</button>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img2'>
                            <Container>
                                    <div>
                                      
                                           <p className='lg:text-8xl md:text-4xl sm:text-4xl  font-bold  text-white'>Enjoy! Hassle Free</p>
                                           <p className='lg:text-8xl md:text-4xl sm:text-4xl  font-bold  text-white'> Delivery Services</p>
                                        

                                        <p className='lg:text-2xl md:text-2xl sm:text-2xl mt-4 secondaryFont font-normal text-white'>We have almost 35+ years of experience for <br /> providing consulting services solutions</p>

                                        <button className='btn-get mt-3 font-bold primaryFont text-white primaryBg  rounded-md '>Get Quote</button>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img3'>
                            <Container>
                                    <div>
                                      
                                           <p className='lg:text-8xl md:text-4xl sm:text-4xl  font-bold  text-white'>Enjoy! Hassle Free</p>
                                           <p className='lg:text-8xl md:text-4xl sm:text-4xl  font-bold  text-white'> Delivery Services</p>
                                        

                                        <p className='lg:text-2xl md:text-2xl sm:text-2xl mt-4 secondaryFont font-normal text-white'>We have almost 35+ years of experience for <br /> providing consulting services solutions</p>

                                        <button className='btn-get mt-3 font-bold primaryFont text-white primaryBg  rounded-md '>Get Quote</button>
                                    </div>
                                </Container>

                            </div>
                        </SwiperSlide>
                    </Swiper>
            
        </div>
    );
};

export default Banner;