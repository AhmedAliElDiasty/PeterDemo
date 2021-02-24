import {Navigation} from 'react-native-navigation';
import registerScreens from './screens';
import onAppLaunch from './utils/appLanuch';

export const startApp = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    onAppLaunch();
  });
};
