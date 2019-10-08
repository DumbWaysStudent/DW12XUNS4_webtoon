import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


class Login extends Component {
  constructor(){
    super();

      this.state = {
        useremail: '',
        password: null,
        showPass: true,
        validatedemail: false,
        validatepass: false,
        disableLogin: true,
      }
  }

  componentDidMount() {
  this.state.validatedemail && this.validatedpass ? 
  this.state.disableLogin === false : this.state.disableLogin === false
  }
  
  handleEmail(useremail) {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(useremail) === true)
    {
    this.setState({
      validatedemail: true,
      });
    }
    else {
      this.setState({
        validatedemail:false,
        })
      }
    }

    handlePassword(password) {
    
      let reg = /(?=.{8,})/ ;
      if(reg.test(password) === true)
      {
      this.setState({
        validatedpass: true,
        disable: false});
        }
      else {
        this.setState({
          validatedpass:false,
          disable: true})
        }
      }

    _onPress () {
      this.state.showPass === false
      ? this.setState({showPass: true})
      : this.setState({showPass: false})
    }

  render () {
    return (
      <View style={styles.center}>

        <View style={styles.textcontainer}>
          <Text style={{fontSize: 40}}>LOGIN</Text>
          <Text style={{fontSize: 16, letterSpacing: 2}}>Login with your account WEBTOON</Text>
        </View>

          <View style={styles.emailcontainer}>
            <TextInput></TextInput>
            style={{padding:12}}
            onChangeText={(useremail) => this.handleEmail(useremail)}
            value={this.setState.useremail}
            placeholder="Enter your email" />
          </View>

          <View style={styles.passwordcontainer}>
            <TextInput
            onChangeText={(password) => this.handlePassword(password)}
            secureTextEntry={this.state.showPass}
            value={this.setState.password}
            style={{padding:12}} 
            placeholder="Enter your Password" />
            
            <TouchableOpacity 
            onPress={this._onPress.bind(this)}> 
            { this.state.showPass
            ? <Icon style={{padding: 15}} name="eye" size={25} color="#000000" />
            : <Icon style={{padding: 15}} name="eye-with-line" size={25} color="#000000" />}
            </TouchableOpacity>

          </View>

          <View>
            <TouchableOpacity
            disabled={this.state.disable}
            style={styles.button}>
            <Text style={{fontSize: 10}}style={{fontSize: 18}}>Login</Text>
            </TouchableOpacity>
          </View>

      </View>
    )
  }
}

export default Login;

const styles = StyleSheet.create ({
  emailcontainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
    marginVertical: 12,
    marginHorizontal: 32,
    elevation: 8,
    borderRadius: 50,
    flexDirection: 'row'
  },
  passwordcontainer: {
    backgroundColor: '#ffffff',
    padding: 5,
    marginVertical: 12,
    marginHorizontal: 32,
    elevation: 8,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  center: {
    flex: 1,
    justifyContent: 'center'
  },
  logincontainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
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
    marginBottom: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 50,
    marginHorizontal: 100,
    justifyContent: 'center',
    elevation: 8,
    borderRadius: 50,

    padding: 20,
	backgroundColor: '#F35959',
    borderRadius:50,
    elevation: 9,
    marginHorizontal: 80,
    marginVertical: 40,
    alignItems: 'center'
  }
})

