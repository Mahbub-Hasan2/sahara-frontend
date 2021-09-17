/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Slider from "react-slick";
import Container from '@material-ui/core/Container';

const LateCovered = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="C_H_late_covered_area">
            <div className="logos_img">
                <h5>Telat Diliput di</h5>
                <img src="/Assets/Media.png" alt="" className="img-fluid" />
            </div>
            <div id="slider_area">
                <div className="container align-items-center">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/BsLiHRu.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <p className="name">Berita Satu</p>
                                        <h5 className="card-title">Sahara Perkuat 50 Ribu Warung Kuliner di Jabot...</h5>
                                        <p className="card-text">
                                            Sahara sudah membantu saya menjangkau pelanggan di daer...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/BsLiHRu.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <p className="name">Berita Satu</p>
                                        <h5 className="card-title">Sahara Perkuat 50 Ribu Warung Kuliner di Jabot...</h5>
                                        <p className="card-text">
                                            Sahara sudah membantu saya menjangkau pelanggan di daer...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/BsLiHRu.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <p className="name">Berita Satu</p>
                                        <h5 className="card-title">Sahara Perkuat 50 Ribu Warung Kuliner di Jabot...</h5>
                                        <p className="card-text">
                                            Sahara sudah membantu saya menjangkau pelanggan di daer...
                                        </p>
                                    </div>
                                </div>
                            </div>
                           
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LateCovered;