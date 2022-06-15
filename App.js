import React from 'react';
import { StyleSheet,View } from 'react-native';
import Header from './components/header/index';


export default function App() {
  return (
    <View style={styles.container}>
      <Header title="adivina el número"/>
    </View>
  );
}

const styles =StyleSheet.create({
  container:{
flex:1,
backgroundColor: '#fff',
  }
})

