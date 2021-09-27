/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Loading from "../components/ShareComponents/Loading";

const HeaderJoinUs = dynamic(() => import('../components/JoinUs/HeaderJoinUs'), {
    loading: () => <Loading />,
    ssr: false,
});
const JoinNow = dynamic(() => import('../components/JoinUs/JoinNow'), {
    loading: () => <Loading />,
    ssr: false,
});
const JoinWholesale = dynamic(() => import('../components/JoinUs/JoinWholesale'), {
    loading: () => <Loading />,
    ssr: false,
});
const MPOS = dynamic(() => import('../components/JoinUs/MPOS'), {
    loading: () => <Loading />,
    ssr: false,
});
const HubungiCS = dynamic(() => import('../components/JoinUs/HubungiCS'), {
    loading: () => <Loading />,
    ssr: false,
});
const Profit = dynamic(() => import('../components/JoinUs/Profit'), {
    loading: () => <Loading />,
    ssr: false,
});
const Testimonials = dynamic(() => import('../components/ShareComponents/Testimonials'), {
    loading: () => <Loading />,
    ssr: false,
});


const JoinUs = () => {
    return (
        <>
            <HeaderJoinUs />
            <Profit />
            <JoinWholesale />
            <JoinNow />
            <Testimonials />
            <MPOS />
            <HubungiCS />
        </>
    );
};

export default JoinUs;