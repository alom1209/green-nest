import React, { use, useEffect, useState } from 'react';
import Indoorplants from '../Components/Indoorplants';
import Loading from '../Pages/Loading';
import { Link } from 'react-router';
const Homecontent = () => {
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

if (loading) {
  return <p className="text-center mt-10"><Loading></Loading></p>; 
}

if (error) {
  return <p className="text-center mt-10 text-red-500">{error}</p>;
}
const topRatedPlants=[...plants].sort((a,b)=>b.rating-a.rating).slice(0,6)
    return (
        <div>
            <div className='text-center mt-4'>
                <h2 className='font-semibold text-xl '>Top Rated Indoor Plants</h2>
            </div>
             <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-3'>
            {
               topRatedPlants.map((plant) => <Indoorplants key={plant.plantId} plant={plant}></Indoorplants>)
            }
            
           </div>
           <div className='text-center mt-3'>
           <Link to='/plant'><button className='btn btn-neutral'>See More</button></Link>
           </div>
        </div>
    );
};

export default Homecontent;