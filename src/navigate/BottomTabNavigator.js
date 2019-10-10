import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator }  from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import Foryouscreen from '../component/Foryouscreen';
import DetaiScreen from '../component/DetailScreen';

const BottomTabNavigator = createBottomTabNavigator(
  {
    ForYou: {
      screen: Foryouscreen,
      navigationOptions: {
         header: null,
         tabBarLabel: 'ForYou',
         tabBarIcon: ({tintColor}) => (
            <Icon name="heart" color='#000000' size={30} />
        )
      }
    },
    ForYou: {
      screen: Foryouscreen,
      navigationOptions: {
         header: null,
         tabBarLabel: 'Favorite',
         tabBarIcon: ({tintColor}) => (
            <Icon name="heart" color='#000000' size={30} />
         ),
      },
   },
   ForYou: {
      screen: Foryouscreen,
      navigationOptions: {
         header: null,
         tabBarLabel: 'Favorite',
         tabBarIcon: ({tintColor}) => (
            <Icon name="heart" color='#000000' size={30} />
         ),
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#00D163',
      inactiveTintColor:'#676767',
      style: {
        backgroundColor: '#E3E3E3',
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