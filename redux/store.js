import { combineReducers, configureStore } from '@reduxjs/toolkit';
import User from './reducers/user';
import Category from './reducers/categories';
import Donations from './reducers/donations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer,persistStore} from 'redux-persist';

const rootReducer = combineReducers({
    user:User,
    categories:Category,
    donation:Donations,
 });
 const configuration = {
   key:'root',
   storage:AsyncStorage,
   version:1,
 };
 const persistedreducer = persistReducer(configuration,rootReducer);

 const store = configureStore({
    reducer: persistedreducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              // Ignore redux-persist actions that include non-serializable values
              ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
          },
      }),
 });
 export default store;

 export const persistor = persistStore(store);
