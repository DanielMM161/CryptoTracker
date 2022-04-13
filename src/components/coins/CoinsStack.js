import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import Colors from '../../res/colors';
import CoinsDetailScreen from '../coinDetail/CoinsDetailScreen';

const Stack = createStackNavigator();

const CoinsStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowOpacity: 0
        },
        headerTintColor: Colors.white
      }}
    >
      <Stack.Screen name="Coins" component={CoinsScreen}/>
      <Stack.Screen name="Detail" component={CoinsDetailScreen}/>
    </Stack.Navigator>
  );
};

export default CoinsStack;