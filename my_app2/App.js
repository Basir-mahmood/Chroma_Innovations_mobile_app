import * as React from 'react';
import { View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import MySplash from './components/splash'
import MyCamera from './components/MyCamera'
import LoadPanorama from './components/LoadPanorama'


const App = createStackNavigator({
  MySplash: { screen: MySplash, navigationOptions: { headerShown: false } },


  Home:
  {
    screen: Home,
    navigationOptions:
    {
      headerShown: true,
      headerStyle:
      {
        backgroundColor: 'rgb(0,142,204)',
      },
      headerTintColor: '#fff',
      headerTitleStyle:
      {
        fontWeight: 'bold',
      },
    }
  },

  MyCamera:
  {
    screen: MyCamera,
    navigationOptions:
    {
      headerShown: false,

    }
  },
  LoadPanorama:
  {
    screen: LoadPanorama,
    title: 'Panorama',
    navigationOptions:
    {
      headerShown: true,
      headerStyle:
      {
        backgroundColor: 'rgb(0,142,204)',
      },
      headerTintColor: '#fff',
      headerTitleStyle:
      {
        fontWeight: 'bold',
      },
    }
  }
})


export default createAppContainer(App);