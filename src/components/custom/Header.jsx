
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { useNavigate, useNavigation } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'

const Header = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const user=JSON.parse(localStorage.getItem("user"))
  

  useEffect(()=>{
    console.log(user)
  },[])

  const logIn = useGoogleLogin({
    onSuccess: (codeResp) => {
      GetUserProfile(codeResp);
    },
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo.access_token}`,
          Accept: "Application/json",
        },
      })
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      });
  };

  return (
    <div className='mt-5 ml-4 mr-4 rounded-3xl p-7  shadow-sm flex justify-between items-center px-10 bg-[#EDE6FF]'>


        <img src="/logo.svg" alt="" />
        <div>
         {user?
         <div className='flex items-center gap-3'>
           <a href="/create-trip">
          <Button variant="outline" size="lg">+ Add New Trip</Button>
          </a>
          <a href="/my-trips">
          <Button variant="outline" size="lg">My Trips</Button>
          </a>
          
          <Popover>
     <PopoverTrigger>
     <img src={user?.picture} alt="" className='h-[35px] w-[35px] rounded-full'/>
     </PopoverTrigger>
  <PopoverContent>
    <h2 className='cursor-pointer' onClick={()=>{
    googleLogout()
    localStorage.clear()
    window.location.reload()
  }}>Log Out</h2>
  </PopoverContent>
</Popover>

         </div>:<Button variant="outline" size="lg" onClick={()=>setOpenDialog(true)}>Sign In</Button>} 
        </div>
        <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="logo" />
              <h2 className="text-lg mt-7 font-bold">Sign In With Google</h2>
              <p>Sign in with Google Authentication</p>
              <Button onClick={logIn} className="w-full mt-5 flex gap-4 items-center" variant="outline">
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header