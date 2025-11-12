import React from 'react';
import ExpertCard from './ExpertCard';

const Expert = () => {
    const experts = [
  {
    id: 1,
    name: "Elon Musk",
    specialization: "Indoor Plant Care Specialist",
    image: "https://i.ibb.co.com/SXRsY0wr/elon-musk.jpg",
  },
  {
    id: 2,
    name: "Bill Gates",
    specialization: "Succulent & Cactus Expert",
    image: "https://i.ibb.co.com/xt1PyH10/bill-gates.jpg",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    specialization: "Fertilizer & Soil Advisor",
    image: "https://i.ibb.co.com/wNh199fZ/zuckerberg.jpg",
  },
];
    return (
        <div className='w-11/12 mx-auto'>
            <div className='mt-5 text-center'>
                <h2 className='font-semibold text-xl mb-5'>Meet Our Green Experts</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    experts.map(expert=><ExpertCard key={expert.id} expert={expert}></ExpertCard>)
                }
            </div>
        </div>
    );
};

export default Expert;