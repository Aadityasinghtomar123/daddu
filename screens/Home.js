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
  Header,
} from 'react-native';
import MyHeader from '../components/MyHeader'

export default class Home extends React.Component {
  render() {
    return (
      <View>
     <MyHeader title="HOME"/>
     <View>
     </View>
     <View>
       <TouchableOpacity style={styles.mealButton}>
         <Text style={styles.mealButtonText}>Meals</Text>
       </TouchableOpacity>
     </View>
     <View>
       <TouchableOpacity>
         <Text></Text>
       </TouchableOpacity>
     </View>
      <View style={{marginTop:150}}>
      <TouchableOpacity style={styles.callingButton}>
      <Text style={styles.callingButtonText}>GOOGLE DUO CALLING</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:10}}>
      <TouchableOpacity style={styles.button} onPress={()=>{Alert.alert('Do you want to call EMERGENCY NUMBER')}}>
      <Text style={styles.buttonText}>EMERGENCY CALL TO 108</Text>
      </TouchableOpacity>
      </View>
      
      </View>
    );
  }
  }
  const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  callingButton: {
    backgroundColor: '#0099cc',
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  callingButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mealButton:{
    width:300,
    height:55,
    borderWidth:5,
    borderRadius:5,
    padding:20,
    marginTop:50,
    marginLeft:30,
    justifyContent:'center',
    alignItems:'center'
  },
  mealButtonText:{
    fontSize:20,
    fontWeight:'bold'
      
  }
});