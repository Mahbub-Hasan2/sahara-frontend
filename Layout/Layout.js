import Head from 'next/head'
import React from 'react';
import Footer from '../components/ShareComponents/Footer';
import Navbar from '../components/ShareComponents/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Sahara frontend landing</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Sahara Logo.png" />
            </Head>
            {/* <MetaLinks/> */}

            {/* Navbar section  */}
            <div className="mb-5 pb-3">
                <Navbar />
            </div>

            {/* All meta tags and css links  */}
            {/* <MetaLinks /> */}

            {/* main app children */}
            {children}


            {/* Footer section  */}
            <Footer />
        </>
    );
};

export default Layout;