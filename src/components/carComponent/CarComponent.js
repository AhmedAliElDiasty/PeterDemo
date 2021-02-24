/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {styles} from './styles'

const CarComponent = (props) => {
  const { type, fuelUsage } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.fuelUsage}>{fuelUsage}</Text>
      </View>
  );
};



export default CarComponent;
