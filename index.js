/**
 * @format
 */
import React from 'react';
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import Cars from "./src/screens/cars/Cars";
import CreateCar from './src/screens/createCar/CreateCar';
import store from './src/store/store';


Navigation.registerComponent('cars', () => (props) => (
  <Provider store={store}>
    <Cars {...props} />
  </Provider>
));  
Navigation.registerComponent('createCar', () => (props) => (
  <Provider store={store}>
    <CreateCar {...props} />
  </Provider>
),);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'cars'
             }
           }
         ]
       }
     }
  });
});