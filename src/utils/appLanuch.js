import { Navigation } from 'react-native-navigation';


export default async () => {
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
};