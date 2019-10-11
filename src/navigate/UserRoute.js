import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

import BottomTabNavigator from './BottomTabNavigator';
import DetailScreen from '../component/DetailScreen';
import DetailEpisode from '../component/DetailEpisode';
import ProfileScreen from '../component/ProfileScreen';
import WebtoonCreation from '../component/WebtoonCreation';
import Login from '../component/Login';
import CreateWebtoon from '../component/CreateWebtoon';
import EditProfileScreen from '../component/EditProfileScreen';
import CreateEpisode from '../component/CreateEpisode';
import EditWebtoon from '../component/EditWebtoon';
import EditEpisode from '../component/EditEpisode';



import Share from 'react-native-share';


const shareOptions = {
   title: 'Share via',
   message: 'some message',
   url: 'some share url',
   social: Share.Social.INSTAGRAM,
};



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
              headerRight: <Icon name="share-alt" style={{marginRight:30,fontSize:25}} onPress={()=>Share.shareSingle(shareOptions)} />,
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
              headerTitle : "Episode 1",
              headerRight: <Icon name="share-alt" style={{marginRight:30,fontSize:25}} onPress={()=>Share.shareSingle(shareOptions)} />,
           }
    
        }
     },
     WebtoonCreation : {
        screen : WebtoonCreation,
        navigationOptions : ({navigation}) => {
         const {navigate, getParam} = navigation
         const title = getParam('title')
  
         return {
            headerTitle : 'tester',
            headerTitleStyle: {
               fontSize: 18,
               fontWeight : 'bold'
            },
            headerTitle : "My Webtoon",
         }
      }
     },
     Logout: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    CreateWebtoon: {
       screen: CreateWebtoon,
       navigationOptions: {
          headerTitle: "Create Webtoon",
          headerRight: <Icon name="check" style={{marginRight:20,fontSize:20}} onPress={ () => navigation.navigate('ProfileScreen') }  />,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight : 'bold'
         }
       },
       
    },
    EditProfileScreen: {
      screen: EditProfileScreen,
      navigationOptions : ({navigation}) => {
        return {
           headerTitle : 'Edit Profile',
           headerLeft: null,
           headerRight: <Icon name="check" style={{marginRight:20,fontSize:25}} onPress={ () => navigation.navigate('ProfileScreen') }  />,
        }
      }
    },
    CreateEpisode: {
       screen: CreateEpisode,
       navigationOptions: {
         headerTitle: "Create Episode",
         headerRight: <Icon name="check" style={{marginRight:20,fontSize:20}} onPress={ () => navigation.navigate('ProfileScreen') }  />,
         headerTitleStyle: {
           fontSize: 18,
           fontWeight : 'bold'
        }
      },
    },
    EditWebtoon: {
      screen: EditWebtoon,
      navigationOptions: {
        headerTitle: "Edit Webtoon",
        headerRight: <Icon name="check" style={{marginRight:20,fontSize:20}} onPress={ () => navigation.navigate('ProfileScreen') }  />,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight : 'bold'
       }
     },

   },
   EditEpisode: {
      screen: EditEpisode,
      navigationOptions: {
        headerTitle: "Edit Episode",
        headerRight: <Icon name="check" style={{marginRight:20,fontSize:20}} onPress={ () => navigation.navigate('ProfileScreen') }  />,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight : 'bold'
        }
      }
   }

})

export default  UserRoute