import React from 'react';
import Image from 'next/image';
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
                    <Image
                            src="/Assets/Map Jawa.png"
                            alt="Picture of the author"
                            width={1228.8}
                            height={448.2}
                            // layout="fill"
                            // layout="intrinsic"
                            objectFit="cover"
                            loading="lazy"
                            className="img-fluid"
                        />
                </div>
            </Container>
        </div>
    );
};

export default HeaderJoinUs;