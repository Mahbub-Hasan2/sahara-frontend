/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const OurVision = () => {
    return (
        <div id="C_A_OurVision_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md">
                        <h4>Visi kami</h4>
                        <p>
                            Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak 2015, SAHARA telah bekerjasama dengan INKOWAPI (Induk Koperasi
                        </p>
                    </div>
                    <div className="col-md text-end">
                        <Image
                            src="/Assets/backgroundImg/vision.png"
                            alt="Picture of the author"
                            width={380}
                            height={500}
                            // layout="fill"
                            layout="intrinsic"
                            objectFit="cover"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurVision;