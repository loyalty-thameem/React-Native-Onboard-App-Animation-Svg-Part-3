import * as React from 'react';
import { View, Text, Button,Icon,StyleSheet, Image } from 'react-native';
import Onboarding from './components/Onboarding';

const App = () => {
  return (
      <View style={styles.container}>
      <Onboarding/>
      </View>

  );
}
export default App
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center'
  }
})
