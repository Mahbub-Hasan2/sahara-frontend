import React from 'react';
import Container from '@material-ui/core/Container';

const HeaderJoinUs = () => {
    return (
        <div id="C_J_header_join_us_area">
            <div className="head">
                <h3>Menjangkau lebih luas<br />
                    Bersama UMKM Lokal
                </h3>
                <p>
                    Membantu usaha kecil untuk dapat menjangkau<br /> konsumen lebih luas.
                </p>
            </div>
            <Container maxWidth="lg">
                <div className="map">
                    <h5>Kami tersebar di berbagai daerah</h5>
                    <img src="/Assets/Map Jawa.png" alt="" className="img-fluid" />
                </div>
            </Container>
        </div>
    );
};

export default HeaderJoinUs;