import React from 'react';
import { View , Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
      {/* <Text style={ styles.title }>BoxObjectScreen</Text> */}

      <View style={ styles.purpleBox }>
        <Text style={{ color: 'white' }}>Hola Mundo</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // height: 30, // es el padre quien determina el tamaño, si no hay fijo, lo determina el hijo
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,

    borderWidth: 10
  },
  purpleBox: {
    height: 30,
    margin: 20,
    padding: 5,
    backgroundColor: 'purple'
  }
});