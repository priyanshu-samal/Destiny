import React from 'react';

const DiamondGrid = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 min-h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-3xl'>
      {/* Diamond 1 */}
      <div className='relative w-[350px] h-[350px] flex items-center justify-center'>
        <div className='absolute inset-0 transform rotate-45 hover:rotate-0 transition-transform duration-300'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img
              src="/img\nature-water-travel-sky.jpg"  // Replace with your default image
              alt="Diamond 1"
              className='w-full h-full object-cover'
            />
            <img
              src="/img\images.png"   // Replace with your hover image
              alt="Diamond 1 Hover"
              className='absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300'
            />
          </div>
          <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <span className='text-white text-3xl font-bold'> Explore</span>
          </div>
        </div>
      </div>

      {/* Diamond 2 */}
      <div className='relative w-[350px] h-[350px] flex items-center justify-center'>
        <div className='absolute inset-0 transform -rotate-45 hover:rotate-0 transition-transform duration-300'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img
              src="/img\rajasthan.jpg"  // Replace with your default image
              alt="Diamond 2"
              className='w-full h-full object-cover'
            />
            <img
              src="/path/to/hover-image2.jpg"   // Replace with your hover image
              alt="Diamond 2 Hover"
              className='absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300'
            />
          </div>
          <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <span className='text-white text-3xl font-bold'>Adventure</span>
          </div>
        </div>
      </div>

      {/* Diamond 3 */}
      <div className='relative w-[350px] h-[350px] flex items-center justify-center'>
        <div className='absolute inset-0 transform rotate-45 hover:rotate-0 transition-transform duration-300'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img
              src="/img\istockphoto-157579910-612x612.jpg"  // Replace with your default image
              alt="Diamond 3"
              className='w-full h-full object-cover'
            />
            <img
              src="/path/to/hover-image3.jpg"   // Replace with your hover image
              alt="Diamond 3 Hover"
              className='absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300'
            />
          </div>
          <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <span className='text-white text-3xl font-bold'>Journey</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiamondGrid;
