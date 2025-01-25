// It is a mechanism for protecting the projects and routes

import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true) // Initially, loader is true and it will be false after the useEffect is executed 
    const authStatus = useSelector((state)=>state.auth.status)
    useEffect(()=>{
        // if(authStatus === true)
        // {
        //     navigate('/')
        // }
        // else if(authStatus === false)
        // {
        //     navigate('/login')
        // }
        // Same thing can be written as:
        if(authentication && authStatus !== authentication) // true and false != true [true] so navigate to login page
            {
            navigate('/login')
        }
        else if(!authentication && authStatus !== authentication) 
            // (! true) = false and false !== true, then navigate to the home page
            {
            navigate('/')
        }
        setLoader(false)
    },[authStatus, navigate, authentication])
  return loader ? <h1>Loading...</h1> : <>{children}</>   
}


