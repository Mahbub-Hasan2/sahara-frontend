/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Slider from "react-slick";

const PeopleInSahara = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
        <div id="C_A_people_IN_sahara_area">
            <h5 className="title">People in Sahara</h5>
            <div id="slider_area">
                <div className="container align-items-center">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/mKE0pIy.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Muhammad Irsan
                                            Saputra
                                        </h5>
                                        <p className="card-text">
                                            “Buat saya membantu usaha
                                            kecil adalah yg utama”
                                        </p>
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/XbpPVrK.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Muhammad Irsan
                                            Saputra
                                        </h5>
                                        <p className="card-text">
                                            “Buat saya membantu usaha
                                            kecil adalah yg utama”
                                        </p>
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/f3736Cp.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Muhammad Irsan
                                            Saputra
                                        </h5>
                                        <p className="card-text">
                                            “Buat saya membantu usaha
                                            kecil adalah yg utama”
                                        </p>
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/emrxG1A.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Muhammad Irsan
                                            Saputra
                                        </h5>
                                        <p className="card-text">
                                            “Buat saya membantu usaha
                                            kecil adalah yg utama”
                                        </p>
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/emrxG1A.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Muhammad Irsan
                                            Saputra
                                        </h5>
                                        <p className="card-text">
                                            “Buat saya membantu usaha
                                            kecil adalah yg utama”
                                        </p>
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src="https://i.imgur.com/emrxG1A.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Muhammad Irsan
                                            Saputra
                                        </h5>
                                        <p className="card-text">
                                            “Buat saya membantu usaha
                                            kecil adalah yg utama”
                                        </p>
                                        <i className="fab fa-linkedin"></i>
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

export default PeopleInSahara;