import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AnotherSection from '../AnotherSection/AnotherSection';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import Stats from '../Stats/Stats';

const Home = () => {
    useTitle('travelBee')
    return (
        <div className='text-center w-10/12 mx-auto'>
            <Hero></Hero>
            <Service></Service>
            <Stats></Stats>
            <AnotherSection></AnotherSection>
        </div>
    );
};

export default Home;