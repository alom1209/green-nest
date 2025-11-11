import React from 'react';
import Tipscard from './Tipscard';

const PlantCareTips = () => {
    const plantTips = [
  { id: 1, title: "Watering", description: "Water once a week, don't overwater." },
  { id: 2, title: "Sunlight", description: "Keep in indirect sunlight." },
  { id: 3, title: "Fertilizing", description: "Fertilize monthly with balanced fertilizer." }
];
    return (
        <div>
            <div className='text-center mt-4'>
                <h2 className='text-xl font-semibold'>Plant Care Tips</h2>
            </div>
            <div>
                {
                    plantTips.map(tip=><Tipscard key={tip.id} tip={tip}></Tipscard>)
                }
            </div>
        </div>
    );
};

export default PlantCareTips;