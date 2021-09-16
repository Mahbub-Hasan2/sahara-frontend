/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from '@material-ui/core/Container';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const LateCovered = () => {
    return (
        <div id="C_H_late_covered_area">
            <div className="logos_img">
                <h5>Telat Diliput di</h5>
                <img src="/Assets/Media.png" alt="" className="img-fluid" />
            </div>
            <div id="slider_area">
                <Container maxWidth="lg" className="align-items-center">
                    <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                        "clickable": true
                    }} navigation={true} className="mySwiper">
                        <SwiperSlide>
                            <div className="card">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img
                                        src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <a href="#!">
                                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card&rsquo;s content.
                                    </p>
                                    <a href="#!" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            Slide 2
                        </SwiperSlide>
                        <SwiperSlide>
                            Slide 3
                        </SwiperSlide>
                        <SwiperSlide>
                            Slide 4
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>
        </div>
    );
};

export default LateCovered;