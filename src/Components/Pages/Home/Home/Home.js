import React from 'react';
import AboutService from '../AboutService/AboutService';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import SucessStory from '../SucessStory/SucessStory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutService></AboutService>
            <Services></Services>
            <Info></Info>
            <SucessStory></SucessStory>
        </div>
    );
};

export default Home;