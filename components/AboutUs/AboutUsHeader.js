import React from 'react';
import Image from 'next/image';

const AboutUsHeader = () => {
    return (
        <div id="C_A_bHeader_area">
            <div className="container">
                <div className="top_content">
                    <div className="row align-items-center">
                        <div className="col-md">
                            <h4>Menjangkau lebih luas
                                Bersama UMKM Lokal</h4>
                            <p>Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak 2015, SAHARA telah bekerjasama dengan INKOWAPI (Induk Koperasi .</p>
                            <button className="btn btn-warning">Belanja Sekarang</button>
                        </div>
                        <div className="col-md img text-end">
                            {/* <img src="https://i.imgur.com/oygyZ0N.png" alt="" className="img-fluid" /> */}
                            {/* <Image src="https://i.imgur.com/oygyZ0N.png" alt="" layout="fill" objectFit="cover" className="img-fluid" />  */}
                            <Image
                                src="https://i.imgur.com/oygyZ0N.png"
                                alt="Picture of the author"
                                width={420}
                                height={511}
                                // layout="fill"
                                layout="intrinsic"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="Our_achievements">
                    <h3>Pencapaian kami</h3>
                    <p>Our achievement in the journey depicted in numbers</p>
                    <div className="C_A_counts  row justify-content-center">
                        <div className="col-md">
                            <h3>35</h3>
                            <p>Toko tersebar di indonesia</p>
                        </div>
                        <div className="col-md">
                            <h3>30</h3>
                            <p>Fortune 500 Clients</p>
                        </div>
                        <div className="col-md">
                            <h3>300</h3>
                            <p>Dedicated Members</p>
                        </div>
                        <div className="col-md">
                            <h3>8</h3>
                            <p>Years of Journey</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsHeader;