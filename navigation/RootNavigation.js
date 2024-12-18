import React from "react";
import { useSelector } from "react-redux"
import { Authenticated, NonAuthenticated } from "./mainNavigation";

export const Rootnavigation = ()=>{
    const {isloggedin} = useSelector(store=>store.user);
    return isloggedin ? <Authenticated/> : <NonAuthenticated/>;
};
