import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import Share from "react-native"
import React from 'react'

import BottomTabNavigator from './BottomTabNavigator';
import DetailScreen from '../component/DetailScreen';
import DetailEpisode from '../component/DetailEpisode';




// const shareOptions = {
//    title: 'Share via',
//    message: 'some message',
//    url: 'some share url',
//    social: Share.Social.WHATSAPP,
//    whatsAppNumber: "9199999999"  // country code + phone number(currently only works on Android)
// };
// Share.shareSingle(shareOptions);


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
              headerRight: <Icon name="share-alt" style={{marginRight:30,fontSize:25}} onPress={()=> alert('share')} />,
           }
    
        }
     },
     DetailEpisode : {
        screen : DetailEpisode,
        navigationOptions : ({navigation}) => {
           const {navigate, getParam} = navigation
           const title = getParam('title')
    
           return {
              headerTitle : title,
              headerTitleStyle: {
                 fontSize: 18,
                 fontWeight : 'bold'
              },
              headerRight: <Icon name="share-alt" style={{marginRight:30,fontSize:25}} onPress={()=> alert('share')} />,
           }
    
        }
     }

})

export default  UserRoute