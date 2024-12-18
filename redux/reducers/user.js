import {createSlice} from "@reduxjs/toolkit";

const initialState = {
isloggedin:false,
    profileImage:require('../../assets/images/user_profile.png'),
};
const User = createSlice({
    name:'User',
    initialState:initialState,
    reducers:{

        resettoinitial:(state)=>{
            return initialState;
        },
        login:(state,action)=>{
            return {...state,...{isloggedin:true},...action.payload};

        },
        updateToken:(state,action)=>{
            state.token = action.payload;
        },
    },
});

export const { resettoinitial,login,updateToken} = User.actions;
export default User.reducer;
