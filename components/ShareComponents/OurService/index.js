import React from 'react';

const OurService = () => {
    return (
        <div id="C_H_our_service_area">
            <div className="container  align-items center">
                <div id="title_site">
                    <p>Layanan kami</p>
                    <div>
                        <h5 className="text-truncate"><span className="activ_box">Belanja Online</span> <span className="dari">|</span> <span>Sahara POS</span> <span className="dari">|</span> <span>Mpok Sahara</span> <span className="dari">|</span> <span>Supplier</span></h5>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md pr-4 img-div">
                        <img src="Assets/service img.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md pl-5 content-div">
                        <h3>Menjangkau lebih luas<br />
                            Bersama UMKM Lokal
                        </h3>
                        <p>Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak 2015, SAHARA telah bekerjasama dengan INKOWAPI (Induk Koperasi .</p>
                        <button className="btn btn-warning">Gabung Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;