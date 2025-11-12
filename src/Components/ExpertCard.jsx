import React from 'react';

const ExpertCard = ({expert}) => {
    return (
        <div >
           <div className="bg-gradient-to-b from-green-50 to-white  shadow-md rounded-xl p-5 text-center hover:shadow-lg transition transform hover:scale-103">
      <img
        src={expert.image}
        alt={expert.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
      />
      <h3 className="text-lg font-semibold">{expert.name}</h3>
      <p className="text-gray-600">{expert.specialization}</p>
    </div> 
        </div>
    );
};

export default ExpertCard;