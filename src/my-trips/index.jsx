import { db } from '@/service/firebaseConfig';
import { getDocs, where, collection, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTripInfo from './components/UserTripInfo';

const MyTrips = () => {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, []);

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/');
      return;
    }

   
    const q = query(collection(db, 'AITrip'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };

  return (
    <div>
      <div className='sm:px-10 md:px-10 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='font-bold text-3xl mb-7'>My Trips</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-2'>
          {userTrips?.length > 0? userTrips.map((trip, index) => (
            <UserTripInfo key={index} trip={trip}  />
          ))
        :[1,2,3,4,5,6].map((item,index)=>{
            <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl'>

            </div>
        })}
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
