import React from 'react';

const Tipscard = ({tip}) => {
    return (
       <div className="card bg-gradient-to-r from-green-50 to-green-100 text-gray-800 rounded-lg shadow-md p-4 transition transform hover:scale-105 hover:shadow-lg">
  <div className="card-body">
    <p>{tip.icon}</p>
    <h2 className="card-title">{tip.title}</h2>
    <p>{tip.description}</p>
  </div>
</div>
    );
};

export default Tipscard;