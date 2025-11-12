import React, { Suspense } from 'react';
import HeroSection from '../Components/HeroSection';
import Homecontent from '../Components/Homecontent';
import Loading from './Loading';
import PlantCareTips from '../Components/PlantCareTips';
import Expert from '../Components/Expert';

const Home = () => {
    
    return (
        <div>
           <HeroSection></HeroSection>
           <section>
            <Homecontent></Homecontent>
           </section>
           <section className='my-4
           '>
            <PlantCareTips></PlantCareTips>
           </section>
           <section className='my-4'>
            <Expert></Expert>
           </section>
        </div>
    );
};

export default Home;