import { createSlice } from "@reduxjs/toolkit"; 

// Here, we are using this for knowing if the user is authenticated or not
const initialState = {
    status: false,  // Not user authenticated
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action)=>{
            state.status= true,
            state.userData = action.payload.userData
        },
        logout: (state)=>{
            state.status = false,
            state.userData = null
        } 
    }
})

export const {login,logout}= authSlice.actions // Here, login and logout are the actions which we are exporting
export default authSlice.reducer;