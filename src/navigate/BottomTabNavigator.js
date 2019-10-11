import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator }  from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import Foryouscreen from '../component/Foryouscreen';
import FavoriteScreen from '../component/FavoriteScreen';
import ProfileScreen from '../component/ProfileScreen';
import EditProfileScreen from '../component/EditProfileScreen';

// import DetaiScreen from '../component/DetailScreen';

const ProfileStack = createStackNavigator({
  ProfileStack : {
     screen : ProfileScreen,
     navigationOptions : ({navigation}) => {
        return {
           headerTitle : 'Profile',
           headerRight: <Icon name="pencil" size={30} style={{marginRight:15}} color="#000000" 
           onPress={() => navigation.navigate('EditProfileScreen')} />,
        }
     }
  },
});




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
      screen: ProfileStack,
      
      navigationOptions: {
        headerTitle : "Episode 1",
        headerRight: <Icon name="share-alt" style={{marginRight:30,fontSize:25}} onPress={()=>Share.shareSingle(shareOptions)} />,
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