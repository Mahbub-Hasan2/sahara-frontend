/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Container from '@material-ui/core/Container';

const Footer = () => {
    return (
        <div id="C_SC_footer_area">
            <div className="">
                {/* <!-- Footer --> */}
                <footer className="text-center text-lg-start text-muted">

                    {/* <!-- Section: Links  --> */}
                    <section className="pt-3">
                        <div className="container text-center text-md-start mt-5">
                            {/* <!-- Grid row --> */}
                            <div className="row mt-3">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                                    {/* <!-- Content --> */}
                                    <h6 className="text_head_line fw-bold mb-4">
                                        <img src="/Assets/Illustration/PNG/Sahara Logo.png" alt="" className="footer_logo" />
                                    </h6>
                                    <div className="footer_info_box d-flex">
                                        <div>
                                            <i className="fas fa-at fa-2x"></i>
                                        </div>
                                        <div>
                                            <h5>Email</h5>
                                            <p>info@sembakosahara.com</p>
                                        </div>
                                    </div>
                                    <div className="footer_info_box d-flex">
                                        <div>
                                            <i className="fas fa-phone-alt fa-2x"></i>
                                        </div>
                                        <div>
                                            <h5>Email</h5>
                                            <p>info@sembakosahara.com</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 m-0 p-0">
                                    {/* <!-- Links --> */}
                                    <h6 className="text_head_line fw-bold mb-4">
                                        PT. Savindo Karya Perdana
                                    </h6>
                                    <p className="description_text">
                                        Bellagio Boutiqe Mall UG 27-28 Jl. Mega Kuningan Barat KAV. E.4.3, Kawasan Mega Kuningan Jakarta 12950
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="cu_div col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 pr-0">
                                    {/* <!-- Links --> */}
                                    <h6 className="text_head_line fw-bold mb-4">
                                        Perusahaan
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Tentang Kami</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Gabung Kami</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Blog</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Kebijakan dan Privasi</a>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="cu_div col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 pr-0">
                                    {/* <!-- Links --> */}
                                    <h6 className="text_head_line fw-bold mb-4">
                                        Download Aplikasi
                                    </h6>
                                    <div className="downloadApp_imgs">
                                        <img src="/Assets/Google Stor with.png" alt="" />
                                        <img src="/Assets/appStore with.png" alt="" />
                                        <img src="/Assets/AppGallery With.png" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Grid column --> */}


                            </div>
                            {/* <!-- Grid row --> */}
                        </div>
                    </section>
                    {/* <!-- Section: Links  --> */}

                    {/* <!-- Section: Social media --> */}
                    <section
                        className="d-flex justify-content-center justify-content-lg-between p-4 border-top"
                    >
                        {/* <!-- Left --> */}
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        {/* <!-- Left --> */}

                        {/* <!-- Right --> */}
                        <div>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        {/* <!-- Right --> */}
                    </section>
                    {/* <!-- Section: Social media --> */}
                </footer>
                {/* <!-- Footer --> */}
            </div>
        </div>
    );
};

export default Footer;