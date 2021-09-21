import React from 'react';
import Image from 'next/image';

const Features = () => {
    return (
        <div id="C_H_Features_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md img">
                        {/* <img src="/Assets/Device 1.png" alt="" className="img-fluid" /> */}
                        <Image
                            src="/Assets/Device 1.png"
                            alt="Picture of the author"
                            width={345}
                            height={727}
                            // layout="fill"
                            layout="intrinsic"
                            objectFit="cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-md">
                        <div className="head">
                            <h3>Fitur Sahara</h3>
                            <p>Pertama dan satu-satunya jaringan <br />
                                usaha warung kelontong yang dikelola.
                            </p>
                        </div>

                        <div className="box d-flex active">
                            <div className="counts">1</div>
                            <div>
                                <h5>Katalog</h5>
                                <p>Blanja kebutuhan warung<br />
                                    lebih mudah bersama kami
                                </p>
                            </div>
                        </div>
                        <div className="box d-flex">
                            <div className="counts">2</div>
                            <div>
                                <h5>Lacak Langsung</h5>
                                <p>Blanja kebutuhan warung<br />
                                    lebih mudah bersama kami
                                </p>
                            </div>
                        </div>
                        <div className="box d-flex">
                            <div className="counts">3</div>
                            <div>
                                <h5>Customer service</h5>
                                <p>Blanja kebutuhan warung<br />
                                    lebih mudah bersama kami
                                </p>
                            </div>
                        </div>
                        <div className="box d-flex">
                            <div className="counts">4</div>
                            <div>
                                <h5>Promosi</h5>
                                <p>Blanja kebutuhan warung<br />
                                    lebih mudah bersama kami
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;