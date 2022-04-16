import React from 'react';
import AboutService from '../AboutService/AboutService';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutService></AboutService>
            <Services></Services>
        </div>
    );
};

export default Home;