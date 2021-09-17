/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Container from '@material-ui/core/Container';
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonials = () => {
    return (
        <div id="C_H_Testimonials_area">
            <Container maxWidth="lg">
                <h3 className="head_line_title">Testimoni Warung</h3>
                <div id="Testimonials">
                    <>
                        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                            "delay": 25000,
                            "disableOnInteraction": false
                        }} pagination={{
                            "clickable": true
                        }} navigation={true} className="mySwiper">
                            <SwiperSlide>
                                <div className="card mb-3 align-items-center">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src="https://i.imgur.com/zIfT1cN.png"
                                                alt="..."
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Dadang Suherman</h5>
                                                <h6>Pemilik warung</h6>
                                                <p className="card-text">
                                                    Sahara sudah membantu saya menjangkau pelanggan di daerah yang jauh
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mb-3 align-items-center">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src="https://i.imgur.com/zIfT1cN.png"
                                                alt="..."
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Dadang Suherman</h5>
                                                <h6>Pemilik warung</h6>
                                                <p className="card-text">
                                                    Sahara sudah membantu saya menjangkau pelanggan di daerah yang jauh
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mb-3 align-items-center">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src="https://i.imgur.com/zIfT1cN.png"
                                                alt="..."
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Dadang Suherman</h5>
                                                <h6>Pemilik warung</h6>
                                                <p className="card-text">
                                                    Sahara sudah membantu saya menjangkau pelanggan di daerah yang jauh
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*<SwiperSlide>
                                Slide 3
                            </SwiperSlide>
                            <SwiperSlide>
                                Slide 4
                            </SwiperSlide>
                            <SwiperSlide>
                                Slide 5
                            </SwiperSlide>
                            <SwiperSlide>
                                Slide 6
                            </SwiperSlide>
                            <SwiperSlide>
                                Slide 7
                            </SwiperSlide>
                            <SwiperSlide>
                                Slide 8
                            </SwiperSlide>
                            <SwiperSlide>
                                Slide 9
                            </SwiperSlide> */}
                        </Swiper>
                    </>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;