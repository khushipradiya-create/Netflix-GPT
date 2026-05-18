import React from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import Browse from './Browse';
import { netflixLogo } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate()
  const dispatch  = useDispatch()
  
  // use State is used to access state from redux store
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });


  }


  // track change in authentication and store action inside apptore
  // because header is always present in page

  useEffect(()=>{
    // listener function calls when auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      // if is not null
      if(user){
        const {uid,email, displayName } = user
        dispatch(addUser({uid  : uid, email : email, displayName: displayName}))
        navigate("/Browse")

      }
      else{
        dispatch(removeUser())
        navigate("/")

      }
    })


    // when component-unmounted we have to stop listener(unsubscribe)
    return () => unsubscribe()
  },[])
  



  return (

    <div className=' flex justify-between absolute px-8 py-2 z-10 bg-gradient-to-b from-black/90 w-full' >

      <img className="w-52" src={netflixLogo} alt="logo" />

      {/* only show this thing when use is available */}
      {user && 
      <div className='m-4'>
        <button className='p-2 text-center text-sm font-bold bg-red-800 text-white hover:bg-red-600' onClick={handleSignOut}>Sign Out</button>
      </div >
      }


    </div>






  )

}

export default Header