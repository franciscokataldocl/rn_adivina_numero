import React from 'react';
import { StyleSheet,View, SafeAreaView } from 'react-native';
import Header from './components/header/index';
import StartGame from './screens/start-game/index';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Header title="adivina el número"/>
      <StartGame/>
    </View>
    </SafeAreaView>
  );
}

const styles =StyleSheet.create({
  container:{
flex:1,
backgroundColor: '#fff',
  }
})

