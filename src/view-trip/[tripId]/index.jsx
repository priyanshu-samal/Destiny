import { useEffect, useState } from 'react'
import { getDoc } from 'firebase/firestore'
import { db } from '@/service/firebaseConfig'
import { doc } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { Toast } from '@/components/ui/toast'
import InfoSection from '../compnents/InfoSection'
import Hotels from '../compnents/Hotels'
import DailyPlacesToVisit from '../compnents/DailyPlacesToVisit'
import Footer from '../compnents/Footer'

const ViewTrip = () => {
    const {tripId}=useParams()
    const [trip,setTrip]=useState([])
    useEffect(()=>{
        tripId&&GetTripData()
    },[tripId])



    const GetTripData=async()=>{
        const docRef=doc(db,'AITrip',tripId)
        const docSnap=await getDoc(docRef)
        if(docSnap.exists()){
            // setFormData(docSnap.data())
            console.log(docSnap.data())
            setTrip(docSnap.data())
        }else{
            console.log('No such document')
            toast("No trip found")
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 x;:px-56'>
        <InfoSection trip={trip}/>
        <Hotels trip={trip}/>
        <DailyPlacesToVisit trip={trip}/>
        {/* <Footer trip={trip}/> */}
    </div>
  )
}

export default ViewTrip