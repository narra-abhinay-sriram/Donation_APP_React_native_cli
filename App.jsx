/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './firebaseConfig';

import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider, useSelector } from "react-redux";
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Rootnavigation } from './navigation/RootNavigation';
import { AppState } from 'react-native';
import { checkToken } from './api/api';

function App() {
  const appstate = useRef(AppState.currentState);
useEffect(()=>{
  const subscription = AppState.addEventListener("change",async(nextAppState)=>{
    if(appstate.current.match(/inactive|background/) && nextAppState === 'Active')
    {
          await checkToken();
    }
    appstate.current =  nextAppState;
  });
  checkToken();
},[]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <NavigationContainer>
        <Rootnavigation />
   </NavigationContainer>
      </PersistGate>

    </Provider>

  );
}



export default App;
//fonts-static=>react-config file=>getfont fam
//navigation follow react-navigation doc
//npm install react-devide-info
//font awesome react native
