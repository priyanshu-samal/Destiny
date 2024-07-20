import { GETPLACEDETAILS, PHOTO_REF_URL } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HotelCardItems = ({hotel}) => {
    const[photoUrl,setPhotoUrl]=useState()
  useEffect(()=>{
    hotel&&GetPlacesPhoto()
  },[hotel])

  const GetPlacesPhoto=async()=>{
    const data={
      textQuery:hotel?.hotelName
    }
    const result=await GETPLACEDETAILS(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)

      const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setPhotoUrl(photoUrl)
    })
  }
  return (
   
         <Link
            
            to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel?.hotelName + ', ' + hotel?.hotelAddress)}`}
            target='_blank'
          >
            <div className='hover:scale-105 transition-all cursor-pointer'>
              <img
                className='rounded-xl h-[180px] w-full object-cover'
                src={photoUrl?photoUrl:'/istockphoto-1357776370-612x612.jpg'} 
                alt={hotel?.hotelName}
              />
              <div className='my-2 flex flex-col gap-2'>
                <h2 className='font-medium'>{hotel?.hotelName}</h2>
                <h2 className='text-xs text-gray-500'>📍{hotel?.hotelAddress}</h2>
                <h2 className='text-xs text-gray-500'>💵{hotel?.price}</h2>
                <h2 className='text-xs text-gray-500'>⭐{hotel?.rating}</h2>
                <p className='text-xs text-gray-500'>{hotel?.description}</p>
              </div>
            </div>
          </Link>
    
  )
}

export default HotelCardItems