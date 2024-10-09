'use client'
import { useAppSelector } from '@/lib/redux/hook';
import React, { useEffect, useState } from 'react'
import VerifyAuth from './verify-auth';
import ProgramingContainer from './programing-container';

function CheckAuth() {
    
    const { auth } = useAppSelector((state) => state.auth);
    const [verify,setVerify] = useState(false)

    useEffect(()=>{
        setVerify(auth)
    },[auth])

  if(!verify)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <VerifyAuth />
      </div>
    );
  
  return (
    <div className='flex justify-center p-5'>
      <ProgramingContainer />
    </div>
  )

}

export default CheckAuth