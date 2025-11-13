import React from 'react';
import { Link } from 'react-router';

const PlantofTheWeek  = ({ plant }) => {
  if (!plant) return null; 

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center gap-6 p-6 md:p-10">
        
        
        <div className="flex-1 w-full lg:w-1/2">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-[300px] rounded-lg  shadow-md"
          />
        </div>

        
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
            🌿 Plant of the Week
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{plant.plantName}</h3>
          <p className="text-gray-700 mb-4">{plant.description}</p>
          <p className="font-medium text-gray-800 mb-2">Price: ${plant.price}</p>
          <p className="font-medium text-gray-800 mb-4">Rating: {plant.rating} ⭐</p>
          
          <Link
            to={`/plants/${plant.plantId}`}
            className="btn btn-primary hover:btn-secondary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantofTheWeek;