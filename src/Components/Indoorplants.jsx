import React, { useState } from 'react';

const Indoorplants = ({plant}) => {
    
    return (
         <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={plant.image}
      alt="Plant" 
      className='w-[300px] h-[250px] p-4 border-0 rounded-md'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{plant.plantName}</h2>
    <div className='flex flex-col gap-2'>
        <p className='font-medium text-[15px]'>Price: {plant.price}</p>
        <p className='font-medium text-[15px]'>Rating: {plant.rating}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
      
    );
};

export default Indoorplants;