import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export const CounterScreen = () => {

  const [count, setCount] = useState(0);

  return (
    <View style={ styles.contianer  }>
      <Text style={ styles.title }>{ count }</Text>
      <Pressable 
        onPress={ () => { setCount(count + 1) } }
        onLongPress={ () => { setCount(0) } }
      >
        <Text>+1</Text>
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
  }
});