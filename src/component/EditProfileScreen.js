import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

export default class ProfileScreen extends Component {

  render() {
    return (

        <View style={styles.center}>

        <View style={styles.textcontainer}>
        <Icon  name="user-circle-o" size={150} color="#C1B7B7" />
        </View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity>
        <View style={styles.passwordcontainer}>
        <Icon  name="photo" size={25}   color="#000000" />
          <Text  style={{padding: 0, fontSize: 20, marginLeft: 10, textAlign: 'center'}}>Gallery </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.passwordcontainer}>
        <Icon  name="camera" size={25}   color="#000000" />
          <Text  style={{padding: 0, fontSize: 20, marginLeft: 10, textAlign: 'center'}}>Camera </Text>
        </View>
        </TouchableOpacity>
      </View>
        <View style={styles.passwordcontainer}>
            <Text  style={{padding: 0, fontSize: 30, textAlign: 'center'}}>Your Name </Text>
        </View>
      </View>
        );
  }
}

const styles = StyleSheet.create ({
    emailcontainer: {
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 5,
      marginVertical: 5,
      marginHorizontal: 5,
      elevation: 5,
      borderRadius: 20,
      flexDirection: 'row',
    },
    passwordcontainer: {
      backgroundColor: '#ffffff',
      padding: 5,
      marginTop: 10,
      marginHorizontal: 5,
      elevation: 3,
      borderRadius: 10,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center'
     
    },
    center: {
    //   flex: 1,
    //   justifyContent: 'center'
    },
    logincontainer: {
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 10,
      marginVertical: 60,
      marginHorizontal: 90,
      justifyContent: 'center',
      elevation: 8,
      borderRadius: 30
    },
    logintext: {
      fontSize: 32,
      justifyContent: 'center'
    },
    textcontainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 0,
      marginTop: 80
    },
    btn1: {
      padding: 20,
        backgroundColor: '#ffffff',
      borderRadius:50,
      elevation: 4,
      marginHorizontal: 80,
      marginVertical: 40,
      alignItems: 'center'
    },
    btn2:{
      padding: 20,
        backgroundColor: '#F35959',
      borderRadius:50,
      elevation: 9,
      marginHorizontal: 80,
      marginVertical: 40,
      alignItems: 'center'
    }
  })