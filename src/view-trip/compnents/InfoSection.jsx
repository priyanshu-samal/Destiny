
import { Button } from '@/components/ui/button'
import { GETPLACEDETAILS } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaShareAlt } from "react-icons/fa";
import { PHOTO_REF_URL } from '@/service/GlobalApi';


const InfoSection = ({trip}) => {

  const[photoUrl,setPhotoUrl]=useState()
  useEffect(()=>{
    trip&&GetPlacesPhoto()
  },[trip])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const GetPlacesPhoto=async()=>{
    const data={
      textQuery:trip?.userSelection?.location?.label
    }
    const result=await GETPLACEDETAILS(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)

      const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[6].name)
      setPhotoUrl(photoUrl)
    })
  }
  return (
    <div>
        <img className='h-[300px] w-full object-cover rounded-xl' src={photoUrl} alt="" />
         <div className='flex justify-between items-center'>

         
        <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
            <div className='flex gap-5 '>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>📅 {trip.userSelection?.noOfDays} Day</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>💰 {trip.userSelection?.budget} </h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>👬 No. of Travelers: {trip.userSelection?.travelWith} </h2>
            </div>
        </div>
        <Button>
        <FaShareAlt />
        </Button>
        </div>
    </div>
  )
}

export default InfoSection