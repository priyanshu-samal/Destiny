import { Button } from '@/components/ui/button'
import { GETPLACEDETAILS, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PlaceCardItem = ({place}) => {

  const[photoUrl,setPhotoUrl]=useState()
  useEffect(()=>{
    place&&GetPlacesPhoto()
  },[place])

  const GetPlacesPhoto=async()=>{
    const data={
      textQuery:place.placeName
    }
    const result=await GETPLACEDETAILS(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)

      const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setPhotoUrl(photoUrl?photoUrl:'/istockphoto-1357776370-612x612.jpg')
    })
  }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName} target='_blank'>
    <div className='border p-3 rounded-xl mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={photoUrl} alt="hi" 
        className='w-[130px] h-[130px] rounded-xl object-cover'/>

        <div>
           <h2 className='font-bold text-lg'>{place.placeName}</h2> 
           <p className='text-sm text-gray-400'>{place.placeDetails}</p>
           <h2 className='mt-2'>🕔 {place.timeTravel} for sightseeing</h2>
           <h2  className='mt-2'>🎫 {place.ticketPricing}</h2>
          
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem