import React, { Suspense, useEffect, useState } from 'react';
import HeroSection from '../Components/HeroSection';
import Homecontent from '../Components/Homecontent';
import Loading from './Loading';
import PlantCareTips from '../Components/PlantCareTips';
import Expert from '../Components/Expert';
import PlantofTheWeek from '../Components/PlantofTheWeek';

const Home = () => {
    const [plants, setPlants] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
  fetch('/plants.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch plants');
      return res.json();
    })
    .then(data => {
      setPlants(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);
const plantOfTheWeek = plants.length ? plants[0] : null;
if (loading) return <p>Loading...</p>;
if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div>
           <HeroSection></HeroSection>
           <section>
            <Homecontent></Homecontent>
           </section>
          {plantOfTheWeek && (
      <PlantofTheWeek plant={plantOfTheWeek} />
    )}
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