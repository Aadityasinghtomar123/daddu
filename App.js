import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import SignIn from './screens/SignIn';
import LogIn from './screens/LogIn';
import Home from './screens/Home';
export default class App extends React.Component {
  render(){
  return (
    
      <AppContainer />
   
  );
  }
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  SignIn:{screen: SignIn},
  LogIn:{screen: LogIn},
  Home:{screen: Home}
})

const AppContainer =  createAppContainer(switchNavigator);