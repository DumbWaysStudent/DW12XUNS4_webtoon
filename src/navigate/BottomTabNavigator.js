import React from 'react';
// import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator }  from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import Foryouscreen from '../component/Foryouscreen';
import FavoriteScreen from '../component/FavoriteScreen';
import ProfileScreen from '../component/ProfileScreen';

// import DetaiScreen from '../component/DetailScreen';

const BottomTabNavigator = createBottomTabNavigator({
    ForYou: {
      screen: Foryouscreen,
      navigationOptions: {
         header: null,
         tabBarLabel: 'For You',
         tabBarIcon: ({ tintColor }) => (
            <Icon name="th-large" size={26} />
        )
      }
    },
    FavoriteScreen: {
      screen: FavoriteScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="star" size={26} />
        )
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={26} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor:'#000000',
      labelStyle: {
      fontSize: 12
      },
      style: {
        backgroundColor: '#21AD38',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    },
  },
)
export default BottomTabNavigator;