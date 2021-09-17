import React from 'react';
import HeaderJoinUs from '../components/JoinUs/HeaderJoinUs';
import JoinNow from '../components/JoinUs/JoinNow';
import JoinWholesale from '../components/JoinUs/JoinWholesale';
import MPOS from '../components/JoinUs/MPOS';
import HubungiCS from '../components/JoinUs/HubungiCS';
import Profit from '../components/JoinUs/Profit';
import Testimonials from '../components/ShareComponents/Testimonials';

const JoinUs = () => {
    return (
        <>
           <HeaderJoinUs/> 
           <Profit/>
           <JoinWholesale/>
           <JoinNow/>
           <Testimonials/>
           <MPOS/>
           <HubungiCS/>
        </>
    );
};

export default JoinUs;