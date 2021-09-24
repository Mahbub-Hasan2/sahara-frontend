/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';


const lateCoveredFakeData = [
    {
        img: "https://i.imgur.com/BsLiHRu.png",
        title: "Sahara Perkuat 50 Ribu Warung Kuliner di Jabot",
        description: "Sahara sudah membantu saya menjangkau pelanggan di daer"
    },
    {
        img: "https://i.imgur.com/bSARGOL.png",
        title: "Sahara Perkuat 50 Ribu Warung Kuliner di Jabot",
        description: "Sahara sudah membantu saya menjangkau pelanggan di daer"
    },
    {
        img: "https://i.imgur.com/qfnDWvb.png",
        title: "Sahara Perkuat 50 Ribu Warung Kuliner di Jabot",
        description: "Sahara sudah membantu saya menjangkau pelanggan di daer"
    },
    {
        img: "https://i.imgur.com/BsLiHRu.png",
        title: "Sahara Perkuat 50 Ribu Warung Kuliner di Jabot",
        description: "Sahara sudah membantu saya menjangkau pelanggan di daer"
    },
    {
        img: "https://i.imgur.com/bSARGOL.png",
        title: "Sahara Perkuat 50 Ribu Warung Kuliner di Jabot",
        description: "Sahara sudah membantu saya menjangkau pelanggan di daer"
    },
    {
        img: "https://i.imgur.com/qfnDWvb.png",
        title: "Sahara Perkuat 50 Ribu Warung Kuliner di Jabot",
        description: "Sahara sudah membantu saya menjangkau pelanggan di daer"
    },
]

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
                <div>
                    <img src="/Assets/Media.png" alt="" className="logo-img" />
                </div>
            </div>
            <div id="slider_area">
                <div className="container align-items-center">
                    <div>
                        <Slider {...settings}>

                            {
                                lateCoveredFakeData.map((data, index) => (
                                    <div key={index}>
                                        <div className="card mb-3">
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <Image
                                                    src={data.img}
                                                    alt="Picture of the author"
                                                    width={270}
                                                    height={200}
                                                    blurDataURL={data.img}
                                                    placeholder="blur"
                                                    layout="responsive"
                                                    objectFit="cover"
                                                    loading="lazy"
                                                />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <p className="name">Berita Satu</p>
                                                <h5 className="card-title">{data.title.substring(46, 0) + "..."}</h5>
                                                <p className="card-text">
                                                    {data.description.substring(55, 0) + "..."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LateCovered;