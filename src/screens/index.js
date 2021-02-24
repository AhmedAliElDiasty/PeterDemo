import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../store/store';
import Cars from './cars/Cars'
import CreateCar from './createCar/CreateCar';
///// screens

const screens = [
    {name: 'cars', Screen: Cars},
    {name: 'createCar', Screen: CreateCar},

  
];

/// create Screen
function createScreen(screen) {
  const {name, Screen} = screen;

  let ScreenWraper;

 
    ScreenWraper = () => <Screen />;

  Navigation.registerComponent(name, () =>
    //   <Provider store={store}>
        <ScreenWraper />
    //   </Provider>
  );
}

//// register fun
export default (registerScreens = () => {
  screens.forEach(screen => createScreen(screen));
});
