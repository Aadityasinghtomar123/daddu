import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements'

export default class LogIn extends React.Component {
  render() {
    return (
      <View>
     
      <View>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.formInput}
            placeholder={'Email'}
            keyboardType={'email-address'}
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={styles.formInput}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          </View>
        </View>
        <View style={{marginTop:160}}>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Home')}}>
        <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:15}}>
        <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:20}}>
        <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  emailContainer: {
    flex: 1,
    marginTop: 300,
  },
  formInput: {
    width: '90%',
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    paddingBottom: 10,
    marginLeft: 20,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#0099cc',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  googleButton: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  googleButtonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 5,
    borderColor: '#0000',
    height: 40,
    borderRadius: 5,
    padding: 20,
  },
  buttonImageIconStyle: {
    padding: 20,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});