/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Loading from "../components/ShareComponents/Loading";

const AboutUsHeader = dynamic(() => import('../components/AboutUs/AboutUsHeader'), {
    loading: () => <Loading />,
    ssr: false,
});

const OurMission = dynamic(() => import('../components/AboutUs/OurMission'), {
    loading: () => <Loading />,
    ssr: false,
});

const OurJourney = dynamic(() => import('../components/AboutUs/OurJourney'), {
    loading: () => <Loading />,
    ssr: false,
});

const OurVision = dynamic(() => import('../components/AboutUs/OurVision'), {
    loading: () => <Loading />,
    ssr: false,
});

const OurService = dynamic(() => import('../components/ShareComponents/OurService'), {
    loading: () => <Loading />,
    ssr: false,
});

const DownloadApp = dynamic(() => import('../components/ShareComponents/DownloadApp'), {
    loading: () => <Loading />,
    ssr: false,
});

const PeopleInSahara = dynamic(() => import('../components/AboutUs/PeopleInSahara'), {
    loading: () => <Loading />,
    ssr: false,
});


const AboutUs = () => {
    return (
        <>
            <AboutUsHeader />
            <OurMission />
            <OurVision />
            <OurService />
            <OurJourney />
            <PeopleInSahara />
            <DownloadApp />
        </>
    );
};

export default AboutUs;