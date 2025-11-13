
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from './Loading';
import { toast } from 'react-toastify';
import { IoPricetagsOutline } from 'react-icons/io5';

const PlantDetails = () => {
    const {id}=useParams()
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
const plant=plants.find(p=>p.plantId===Number(id))
if(!plant){
    toast('plant is not found')
}
const handleBooking=(e)=>{
  e.preventDefault();
  const name=e.target.name.value;
  const email=e.target.email.value;
  toast.success(`Successfully booked ${name}. Stay Tuned!`);
  e.target.reset();
}
    return (
     <div className='w-11/12 mx-auto'>
       <div className="p-10">
  <div className="flex flex-col md:flex-row gap-8">
    
       <img
      src={plant.image}
      className="w-full md:w-1/2 mx-auto h-[300px] rounded-lg shadow-2xl "
    />
   
    <div className='md:w-1/2'>
      <h1 className="text-3xl font-bold">{plant.plantName}</h1>
      <p className="py-6 font-semibold ">
        About plant: {plant.description}
      </p>
       <p className='font-semibold mt-3
     '>
      Price:${plant.price}
     </p>
       <p className='font-semibold mt-3
     '>
     Rating: {plant.rating}
     </p>
       <p className='font-semibold mt-3
     '>
     Stock: {plant.availableStock}
     </p>
    </div>
  </div>
</div>
<div className="">
  <div className='text-center mt-4'>
    <p className='font-semibold text-xl'>Book Consultation</p>
  </div>
  <div className="hero-content  flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 shadow-2xl">
      <div className="p-10">
       <form className='text-center' onSubmit={handleBooking}>
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Your Name" required/>
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Enter your Email" required/>
          <button className='btn btn-neutral mt-4'>Book Now</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
     </div>
    );
};

export default PlantDetails;