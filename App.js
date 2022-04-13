/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, useColorScheme, Image} from 'react-native';
import CoinsStack from './src/components/coins/CoinsStack';
import Colors from './src/res/colors';
import FavoritesStack from './src/components/favorites/FavoritesStack';

const Tabs = createBottomTabNavigator();

const App = () => {
  
  return (    
    <NavigationContainer>
      <Tabs.Navigator        
        tabBarOptions={{
          activeTintColor: "#fefefe",
          activeBackgroundColor: Colors.blackPearl,
          inactiveBackgroundColor: Colors.blackPearl        
        }}
      >
        <Tabs.Screen 
          name="Coins"
          component={CoinsStack}
          options={{
            headerShown: false,
            tabBarLabel: "Coins",
            tabBarIcon: ({ size, color}) => (
              <Image
                style={{ tintColor: color, width: size, height: size}}
                source={require('CryptoTracker/src/assets/bank.png')}
              />
            )
          }}
        />
        
        <Tabs.Screen 
          name="Favorites"
          component={FavoritesStack}
          options={{
            headerShown: false,
            tabBarLabel: "Favorites",
            tabBarIcon: ({ size, color}) => (
              <Image
                style={{ tintColor: color, width: size, height: size}}
                source={require('CryptoTracker/src/assets/star.png')}
              />
            )
          }}
        />

      </Tabs.Navigator>        
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
