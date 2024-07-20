import React from 'react'

const Profile = () => {
  return (
    <div className='mt-16 mb-16 flex justify-center'>
      <div className='flex items-center space-x-4'>
        <h2 className='font-semibold text-2xl'>Want to connect?</h2>
        <a 
          href="https://x.com/PriyanshuS92042" 
          target='_blank' 
          rel='noopener noreferrer' 
          className='flex items-center'
        >
          <img 
            className='w-12 h-12' 
            src="/feed\x.avif" 
            alt="X Profile"
          />
        </a>
        <a 
          href="https://www.linkedin.com/in/priyanshusamal-/" 
          target='_blank' 
          rel='noopener noreferrer' 
          className='flex items-center'
        >
          <img 
            className='w-12 h-12' 
            src="/feed\download.png" 
            alt="LinkedIn Profile"
          />
        </a>
      </div>
    </div>
  )
}

export default Profile
