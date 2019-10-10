import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import React from 'react'
import BottomTabNavigator from './BottomTabNavigator';
import DetailScreen from '../component/DetailScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import Share from "react-native"



onShare = () => Share.share ({
    title: 'Title',
    message: 'Share Webtoon Episode ', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'www.example.com',
    subject: 'Subject'
  })


const UserRoute = createStackNavigator({

    BottomTabNavigator: {
        screen : BottomTabNavigator,
        navigationOptions: {
            header : null
        }
    },
    DetailScreen : {
        screen : DetailScreen,
        navigationOptions : ({navigation}) => {
           const {navigate, getParam} = navigation
           const title = getParam('title')
    
           return {
              headerTitle : title,
              headerTitleStyle: {
                 fontSize: 18,
                 fontWeight : 'bold'
              },
              headerRight: <Icon name="share-alt" style={{marginRight:30,fontSize:25}} onPress={() => onShare()} />,
           }
    
        }
     },
})

export default createAppContainer (UserRoute)