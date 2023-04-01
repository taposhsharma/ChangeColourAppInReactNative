import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [bgColour,setBgcolour] = useState(`rgb(127,0,255)`)
   const onPressHandler = () =>{
    setBgcolour(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)

   }

  return (
    <View style={
     [styles.container,{backgroundColor:bgColour}]
    }
   >
      <Button title='Click me' onPress={onPressHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(127,0,255)'
  }
 
});
