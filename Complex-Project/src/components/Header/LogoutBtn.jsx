import React from "react";
import {useDispatch} from "react-redux"
import authService from '../../appwrite/auth'
import { logout } from "../../store/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })// Since logout() is a promise inside "appwrite/auth.js" so we use ".then()" to handle the promise
    }
    return(
        
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler} // {} is used to insert JS in JSX
        >Logout</button>
    )
}

export default LogoutBtn