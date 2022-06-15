import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { styles } from './style';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start game</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}  placeholder='0' keyboardType='numeric' />

        <View style={styles.buttonContainer}>
          <Button onPress={() => null} title='LIMPIAR' color='#3C4050' />

          <Button onPress={() => null} title='CONFIRMAR' color='#DE3D4B' />
        </View>
      </View>
    </View>
  );
};

export default StartGame;
