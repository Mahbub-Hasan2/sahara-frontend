import React from 'react';

const profitFakeData = [
    {
        img: "/Assets/Illustration/PNG/Pickup di warung.png",
        title: (<p>Bisa Pick Up di Warung</p>),
        description: "Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak."
    },
    {
        img: "/Assets/Illustration/PNG/Harga terjangkau.png",
        title: (<p>Pengantaran Bisa Dijadwalkan</p>),
        description: "Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak."
    },
    {
        img: "/Assets/Illustration/PNG/Pengantaran dijadwalkan.png",
        title: (<p>Harga Terjangkau</p>),
        description: "Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak."
    },
    {
        img: "/Assets/Illustration/PNG/Barang berkualitas.png",
        title: (<p>Barang Berkualitas</p>),
        description: "Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak."
    },
]

const Profit = () => {
    return (
        <div id="C_J_profit_area">
            <div className="container">
                <div className="head_lines">
                    <p>Keuntungan bersama kami</p>
                    <h4>Retail<span>Grosir</span></h4>
                </div>

                <div className="cards row">
                    {profitFakeData.map((data, index) => (
                        <div key={index} className="col-md-6">
                            <div className="card mb-3 shadow-0">
                                <div className="row g-0">
                                    <div className="col-sm-2 text-center">
                                        <img
                                            src={data.img}
                                            alt="loading..."
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-sm-10">
                                        <div className="card-body pt-0 pr-0">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">
                                                {data.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="col-md-6 row">
                        <div className="img text-center col-sm-1">
                            <img src="/Assets/Illustration/PNG/Pickup di warung.png" alt="" className="img-fluid" />
                        </div>
                        <div className="text col-sm-7">
                            <h5>Bisa Pick Up<br />
                                di Warung
                            </h5>
                            <p>
                                Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img">
                            <img src="/Assets/Illustration/PNG/Harga terjangkau.png" alt="" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Harga<br/>Terjangkau</h5>
                            <p>
                                Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img">
                            <img src="/Assets/Illustration/PNG/Pengantaran dijadwalkan.png" alt="" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>
                                Pengantaran <br /> Bisa Dijadwalkan
                            </h5>
                            <p>Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img">
                            <img src="/Assets/Illustration/PNG/Barang berkualitas.png" alt="" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Barang<br /> Berkualitas</h5>
                            <p>
                                Pertama dan satu-satunya jaringan usaha warung kelontong yang dikelola oleh perempuan! Sejak.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Profit;