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
} from 'react-native';

export default class SignIn extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.formInput}
            placeholder={'Username'}
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
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
          <TextInput
            style={styles.formInput}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>
        <View style={{ marginTop: 250 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30  }}>
        <TouchableOpacity style={styles.logInButton}>
            <Text style={styles.logInButtonText}>
              ALLREADY HAVE AN ACCOUNT? LOG IN
            </Text>
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
  logInButton: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  logInButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
