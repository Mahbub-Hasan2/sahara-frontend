import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';

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
                        <Image
                            src="/Assets/Device above fold home.png"
                            alt="Picture of the author"
                            width={264}
                            height={264}
                            layout="responsive"
                            objectFit="cover"
                            loading="eager"
                        />
                    </Col>
                </Row>
            </div>

            {/* Trusted By = Logos  */}
            <div id="c_H_Dipercaya_Oleh">
                <p>Dipercaya Oleh</p>

                <div>
                    <img src="Assets/Partner.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Header;