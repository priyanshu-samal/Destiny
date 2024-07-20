import React from 'react';
import { Link } from 'react-router-dom';
import HotelCardItems from './HotelCardItems';

const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
      <div className='mt-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
         <HotelCardItems hotel={hotel}/>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
