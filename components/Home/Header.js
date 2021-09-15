import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
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
                        <div id="download_app"><img src="/Assets/Google Play.png" alt="" className="img-fluid" /><img src="/Assets/App Store.png" alt="" className="img-fluid" /><img src="/Assets/AppGallery.png" alt="" className="img-fluid" /></div>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src="/Assets/Device above fold home.png" alt="" />
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