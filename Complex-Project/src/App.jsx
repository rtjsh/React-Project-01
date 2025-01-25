import React, {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from "./store/authSlice"
import {Header} from './components/index'
import { Footer } from './components/index';

import { Outlet } from 'react-router-dom';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL); // Accessing the environment variable file
  const [loading, setLoading] = useState(true) // Fetching data from a network or database[in our case Appwrite] takes time so we use loading
  const dispatch = useDispatch(
    useEffect(()=>{
      authService.getCurrentUser()  // Gives us the current user
      .then((userData)=>{
        if(userData){
          dispatch(login({userData})) // Dispatches the "userData" in "authSlice/reducers/login/state.userData" of "authSlice.js" file
        }
        else{
          dispatch(logout()) // "logout" state will be activated as no userData has been found here
        }
      })
      .finally(()=> setLoading(false)) // After being loaded, it is set to "false"
    },[])
  )
  

  // Conditional Rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
           TODO: <Outlet/> {/*Comes from react-router-DOM */}
        </main>
        <Footer />
      </div>
    </div>
  ):null
}

export default App
