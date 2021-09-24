/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const OurMission = () => {
    return (
        <div id="C_A_OurMission_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md img-div">
                        <Image
                            src="/Assets/backgroundImg/missionImg.png"
                            alt="Picture of the author"
                            width={380}
                            height={500}
                            // layout="fill"
                            layout="intrinsic"
                            objectFit="cover"
                            className="img"
                        />
                    </div>
                    <div className="col-md">
                        <h4>Misi kami</h4>
                        <p>
                            Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak 2015, SAHARA telah bekerjasama dengan INKOWAPI (Induk Koperasi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;