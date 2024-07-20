import React from 'react';
import PlaceCardItem from './PlaceCardItem';

const DailyPlacesToVisit = ({ trip }) => {
  // Extract and sort the days in ascending order
  const sortedDays = trip.tripData?.itinerary 
    ? Object.keys(trip.tripData.itinerary).sort((a, b) => {
        const dayA = parseInt(a.match(/\d+/)[0]);
        const dayB = parseInt(b.match(/\d+/)[0]);
        return dayA - dayB;
      })
    : [];

  return (
    <div>
      <h2 className='font-bold text-xl mt-10'>Places to visit</h2>
      <div>
        {sortedDays.map(day => (
          <div key={day} className='mt-5'>
            <h2 className='font-medium text-lg'>{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
            <div className='grid md:grid-cols-2 gap-5'>
              {trip.tripData.itinerary[day].plan.map((place, index) => (
                <div key={index}>
                  <h2 className='font-medium text-sm text-black'>{place.bestTimeToVisit}</h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyPlacesToVisit;
