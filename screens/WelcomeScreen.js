import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class WelcomeScreen extends React.Component {
  
  render() {
    return (
      <View>
        <Image
          source={require('../assets/backroung.png')}
          style={{ witdh: 450, height: 500 }}
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View >
            <TouchableOpacity style={styles.logInButton} onPress={()=>{this.props.navigation.navigate('LogIn')}}>
              <Text style={styles.logInButtonText}>           LOG IN             </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.signUpButton} onPress={()=>{this.props.navigation.navigate('SignIn')}}>
              <Text style={styles.signUpButtonText}>           SIGN UP           </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  signUpButton: {
    backgroundColor: '#0099cc',
    padding: 20,
    paddingBottom:50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'black'
  },
  logInButton: {
    backgroundColor: 'white',
    padding: 20,
    paddingBottom:50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'black'
  },
  signUpButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  logInButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});
