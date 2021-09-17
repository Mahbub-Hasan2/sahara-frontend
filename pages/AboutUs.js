import React from 'react';
import AboutUsHeader from '../components/AboutUs/AboutUsHeader';
import OurMission from '../components/AboutUs/OurMission';
import OurJourney from '../components/AboutUs/OurJourney';
import OurVision from '../components/AboutUs/OurVision';
import OurService from '../components/ShareComponents/OurService';
import DownloadApp from '../components/ShareComponents/DownloadApp';
import PeopleInSahara from '../components/AboutUs/PeopleInSahara';

const AboutUs = () => {
    return (
        <>
            <AboutUsHeader/>
            <OurMission/>
            <OurVision/>
            <OurService/>
            <OurJourney/>
            <PeopleInSahara/>
            <DownloadApp/>
        </>
    );
};

export default AboutUs;