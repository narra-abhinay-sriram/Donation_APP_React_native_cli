/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './firebaseConfig';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './navigation/mainNavigation';
import {Provider, useSelector } from "react-redux";
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';





function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <NavigationContainer>
    <MainNavigation/>
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
