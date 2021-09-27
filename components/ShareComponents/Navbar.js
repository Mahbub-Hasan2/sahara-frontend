/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
    const [navToggleBtn, setNavToggleBtn] = React.useState(true);

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;

        const changeNavbarBg = () => {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("c_s_Navbar_area").style.top = "0";

            } else {
                document.getElementById("c_s_Navbar_area").style.top = "-65px";
            }
            prevScrollpos = currentScrollPos;
        };
        window.addEventListener('scroll', changeNavbarBg);
    }, []);


    const [white, setWhite] = React.useState(false);
    useEffect(() => {
        const changeNavbarBg = () => {
            if (window.scrollY >= 90) {
                setWhite(true);
            } else {
                setWhite(false);
            }
        };
        window.addEventListener('scroll', changeNavbarBg);
    }, []);



    return (
        <div id="c_s_Navbar_area">
            {/* <!-- Navbar --> */}
            <nav className={`navbar navbar-expand-lg navbar-light ${white ? "bg-white" : "bg-none"}`}>
                {/* <!-- Container wrapper --> */}
                <div className="container">
                    {/* <!-- Navbar brand --> */}
                    <Link href="/">
                        <a className="navbar-brand me-2">
                            <img
                                src="/Assets/Illustration/PNG/Sahara Logo.png"
                                height="40"
                                alt=""
                                loading="lazy"
                                style={{ marginTop: "-1px" }}
                            />
                        </a>
                    </Link>

                    {/* <!-- Toggle button --> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setNavToggleBtn(!navToggleBtn)}
                    >

                        {navToggleBtn ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/JoinUs">
                                    <a className="nav-link">Gabung kami</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blogs">
                                    <a className="nav-link">Blog</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/AboutUs">
                                    <a className="nav-link">Tentang Kami</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/TOS">
                                    <a className="nav-link">Karir</a>
                                </Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}

                        <div className="text-center-m">
                            <button type="button" className="btn btn-primary me-3 def_active_btn">
                                Belanja Sekarang
                            </button>
                            <Link href="/" locale="en">
                                <button type="button" className="btn btn-link px-3 btn-ID">
                                    ID
                                </button>
                            </Link>
                            <Link href="/" locale="fr">
                                <button type="button" className="btn btn-link px-3 btn-EN">
                                    EN
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- Collapsible wrapper --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </div>
    );
};

export default Navbar;