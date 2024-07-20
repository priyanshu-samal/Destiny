import { GETPLACEDETAILS, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserTripInfo = ({ trip }) => {
    const[photoUrl,setPhotoUrl]=useState()
    useEffect(()=>{
      trip&&GetPlacesPhoto()
    },[trip])
  
    const GetPlacesPhoto=async()=>{
      const data={
        textQuery:trip?.userSelection?.location?.label
      }
      const result=await GETPLACEDETAILS(data).then(resp=>{
        console.log(resp.data.places[0].photos[3].name)
  
        const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
        setPhotoUrl(photoUrl)
      })
    }
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all '>
      <img
        src={photoUrl?photoUrl:'/istockphoto-1357776370-612x612.jpg'}
        alt=""
        className='object-cover rounded-xl h-[250px] w-full gap-10'
      />
      <div>
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='tex-sm text-gray-500'>{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection.budget}</h2>
      </div>
    </div>
    </Link>
  );
};

export default UserTripInfo;
