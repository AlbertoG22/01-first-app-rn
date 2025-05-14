import React, { useState } from 'react';
import { Button, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

export const CounterScreen = () => {

  const [count, setCount] = useState(0);

  return (
    <View style={ styles.contianer  }>
      <Text style={ styles.title }>{ count }</Text>
      <Pressable 
        onPress={ () => { setCount(count + 1) } }
        onLongPress={ () => { setCount(0) } }
        style={ ({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ] }
      >
        <Text style={{ 
          color: Platform.OS === 'android' ? 'white' : '#4647AB'
        }}>Incrementar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: 300
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white', // cambiar estilos con base en el dispositivo que corra la app
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4647ab' : 'white',

  }
});