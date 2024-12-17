import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName:'abhinay',
    lastName:'Narra',
    profileImage:require('../../assets/images/user_profile.png'),
};
const User = createSlice({
    name:'User',
    initialState:initialState,
    reducers:{
        updatefirstName:(state,action)=>{
            state.firstName = action.payload;
        },
        resettoinitial:(state)=>{
            return initialState;
        },
    },
});

export const {updatefirstName , resettoinitial} = User.actions;
export default User.reducer;
