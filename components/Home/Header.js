import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import Image from 'next/image';
import Video from 'react-responsive-video';

const Header = (props) => {
    return (
        <div id="c_H_header_area">
            <div className="container">
                <Row className="align-items-center">
                    <Col md={6}>
                        <h3>Menjangkau lebih luas
                            <br />
                            Bersama UMKM Lokal
                        </h3>

                        <p>Membantu usaha kecil untuk dapat menjangkau konsumen lebih luas.</p>
                        <div id="download_app">
                            <img src="/Assets/Google Play.png" alt="" className="img-fluid" /><img src="/Assets/App Store.png" alt="" className="img-fluid" /><img src="/Assets/AppGallery.png" alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={6}>
                        {/* <Image
                            src="https://i.imgur.com/HgZOMf0.png"
                            alt="Picture of the author"
                            width={264}
                            height={264}
                            blurDataURL="https://i.imgur.com/HgZOMf0.png"
                            placeholder="blur"
                            layout="responsive"
                            objectFit="cover"
                            loading="eager"
                        /> */}
                        {/* <video autoPlay loop style={{ width: '500px', height: 'auto' }}>
                            <source src="/video/Hp.mp4" />
                        </video> */}
                        <Video mp4={`/video/Hero Illustration.mp4`} />
                    </Col>
                </Row>
            </div>

            {/* Trusted By = Logos  */}
            <div id="c_H_Dipercaya_Oleh">
                <p>Dipercaya Oleh</p>

                <img src="/video/logo.gif" alt="" />


            </div>
        </div>
    );
};

export default Header;