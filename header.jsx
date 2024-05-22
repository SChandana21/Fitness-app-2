import React, { useState } from 'react';
import dumbbell from './dumbbell.png';
import Logo from './logo.png';
import { Homecontainer } from './components';
import { RxHamburgerMenu } from "react-icons/rx";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './firebase.config';
import { useStatevalue } from './context/Stateprovider';
import { actionType } from './context/reducer';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';



const Header = () => {
  const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStatevalue();

    const [ismenu, setismenu] = useState(false);

  const login = async () => { 
   if (!user) {
    const {
      user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]));
   }else{
    setismenu(!ismenu);
   }
    
  }
  return (
    <div className='fixed z-50 w-screen p-6  flex  items-center justify-between'>
      <img src={dumbbell} alt='dumbbell' className='flex w-20 h-20'/>
      <div className='flex  gap-7 cursor-pointer items-center hidden md:flex justify-center'>
      <p>Home</p> 
      <p >About</p> 
      <p >Track</p> 
      <p>Excercises</p>
      <img src={user ? user.photoURL: Logo} alt='user-icon' onClick={login} className='flex w-10 h-10 justify-center items-center ml-3'/>
      {
        ismenu && (
          <div className='w-40 bg-gray-50 rounded-lg shadow-xl flex absolute flex-col mt-20 ml-16 px-1 py-1 top-2 right-2 cursor-pointer gap-2 '>
        {user && (
          <Link>
          <p  className='hover:bg-slate-300 py-1'>Track calories</p>
          </Link>
        )}
        <p className='hover:bg-slate-300 py-1' onClick={''}>Logout</p>
        </div>
        )
      }
      </div>
      <button id="menuButton" class="md:hidden cursor-pointer text-slate-500 flex gap-4 items-center justify-evenly" >
    &#9776; 
    <div className='relative'>
    <img src={user ? user.photoURL: Logo} alt='user-icon' onClick={login} className='flex w-10 h-10 justify-center items-center ml-3 '/>
    {
        ismenu && (
          <div className='w-40 bg-gray-50 rounded-lg shadow-xl flex absolute flex-col mt-20 ml-16 px-1 py-1 top-2 right-2 cursor-pointer'>
           <p>Logout</p>
        
        </div>
        )
      }
    </div>
</button>

      
    </div>
    
  )
}

export default Header;
