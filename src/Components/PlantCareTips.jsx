import React from 'react';
import Tipscard from './Tipscard';
import { PiCloudSunLight } from 'react-icons/pi';
import { GiPlantWatering } from 'react-icons/gi';
import { RiSeedlingLine } from 'react-icons/ri';

const PlantCareTips = () => {
    const plantTips = [
  { id: 1, title: "Watering", description: "Water once a week, don't overwater.",icon:<GiPlantWatering size={30}/> },
  { id: 2, title: "Sunlight", description: "Keep in indirect sunlight.",icon:<PiCloudSunLight size={30}/> },
  { id: 3, title: "Fertilizing", description: "Fertilize monthly with balanced fertilizer.",icon:<RiSeedlingLine size={30}/> }
];
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center mt-4'>
                <h2 className='text-xl font-semibold'>Plant Care Tips</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-3'>
                {
                    plantTips.map(tip=><Tipscard key={tip.id} tip={tip}></Tipscard>)
                }
            </div>
        </div>
    );
};

export default PlantCareTips;