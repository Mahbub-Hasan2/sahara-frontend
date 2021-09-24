/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from "react-slick";

const JoinWholesale = () => {
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
        <div id="C_J_JoinWholesale_area">
            <div className="container">
                <div className="heading_section">
                    <h4>Gabung Grosir</h4>
                    <p>Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak 2015, SAHARA telah bekerjasama dengan INKOWAPI (Induk Koperasi .</p>
                </div>

                <div className="cards_section">
                    <p className="head_line">Syarat Gabung</p>
                    <Slider {...settings} className="row">
                        <div className="col">
                            <div className="card align-items-center">
                                <img src="/Assets/Illustration/PNG/Toko 3 tahun berdiri.png" alt="" />
                                <p>Toko sudah berdiri selama 3 tahun.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card align-items-center">
                                <img src="/Assets/Illustration/PNG/Mudah dilalui Roda 4.png" alt="" />
                                <p>Toko mudah dilalui oleh kendaraan beroda 4.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card align-items-center">
                                <img src="/Assets/Illustration/PNG/Pesanan melalui aplikas.png" alt="" />
                                <p>Semua Pesanan Melalui Aplikasi</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card align-items-center">
                                <img src="/Assets/Illustration/PNG/Omzet dibawah 50 juta.png" alt="" />
                                <p>Omzet Toko Belum mencapai 50 Juta per bulan. </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card align-items-center">
                                <img src="/Assets/Illustration/PNG/Omzet dibawah 50 juta.png" alt="" />
                                <p>Omzet Toko Belum mencapai 50 Juta per bulan. </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default JoinWholesale;