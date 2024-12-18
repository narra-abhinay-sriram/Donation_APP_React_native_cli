import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/home';
import { Singledonation } from '../screens/singleDonation/singleDonation';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';

const stack = createStackNavigator();

export const NonAuthenticated = ()=>{
    return(
        <stack.Navigator
        initialRouteName={'login'}
        screenOptions={{header:()=>null,headerShown:false}}>
            <stack.Screen name={'login'} component={Login} />
            <stack.Screen name={'register'} component={Registration} />

        </stack.Navigator>
    );
};

export const Authenticated = ()=>{
    return(
        <stack.Navigator
        initialRouteName={'home'}
        screenOptions={{header:()=>null,headerShown:false}}>

        <stack.Screen name={'home'} component={Home} />
        <stack.Screen name={'singledonate'} component={Singledonation} />
        </stack.Navigator>
    );
};
