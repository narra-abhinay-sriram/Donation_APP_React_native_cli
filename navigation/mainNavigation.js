import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/home';

const stack = createStackNavigator();

export const MainNavigation = ()=>{
    return(
        <stack.Navigator
        screenOptions={{header:()=>null,headerShown:false}}>
        <stack.Screen name={'home'} component={Home} />
        </stack.Navigator>
    );
};
