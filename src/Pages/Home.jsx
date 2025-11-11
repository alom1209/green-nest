import React, { Suspense } from 'react';
import HeroSection from '../Components/HeroSection';
import Homecontent from '../Components/Homecontent';
import Loading from './Loading';
import PlantCareTips from '../Components/PlantCareTips';

const Home = () => {
    
    return (
        <div>
           <HeroSection></HeroSection>
           <div>
            <Homecontent></Homecontent>
           </div>
           <div className='my-4
           '>
            <PlantCareTips></PlantCareTips>
           </div>
        </div>
    );
};

export default Home;