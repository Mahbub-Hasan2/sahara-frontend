import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonials = () => {
    return (
        <div id="C_H_Testimonials_area">
            <div className="container">
                <h3>Testimoni Warung</h3>
                <div id="Testimonials">
                    <>
                        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }} pagination={{
                            "clickable": true
                        }} navigation={true} className="mySwiper">
                            <SwiperSlide>Slide<br/> d<br/><br/> d<br/><br/> d<br/><br/> d<br/><br/> d<br/> 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;