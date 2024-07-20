import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='h-screen w-full bg-[#FFFFFF]'>
      <div className='flex flex-col items-center gap-6 px-4 md:px-8 lg:px-16 xl:px-24'>
        <div className='relative mt-12 text-center'>
          <svg
            className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full hidden md:block'
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 324.65 76.45"
          >
            <g data-name="uuid-843ff28a-5436-46c2-91ac-583b1ac45611">
              <path
                d="m36.63,6.77s203.2-22.57,265.08,25.69c61.88,48.26-134.91,42.24-134.91,42.24C-80.19,69.01-26.62,2.25,171.28,8.78c197.91,6.53,180.31,51.57,72.76,58.83,0,0-275.15,17.46-225.26-66.11"
                fill="none"
                stroke="#66fcc0"
                stroke-miterlimit="10"
                stroke-width="3"
                data-name="uuid-80927de7-898c-4619-bf54-af43c886e318"
              />
            </g>
          </svg>
          <span className='relative text-center text-[#AA8CFF] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-title animate-textAnimation'>
            Plan Your Next Adventure With Personalized AI:
          </span>
          <div className='block md:hidden border-b-4 border-[#66fcc0] mt-2'></div>
        </div>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center animate-textAnimation'>
          Your Personal Assistant For Planning Trips
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center animate-textAnimation'>
          "Your Ultimate AI Travel Companion: Plan, Explore, Enjoy!"
        </p>
        <Link to={'/create-trip'}>
          <Button className='mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-16'>Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
