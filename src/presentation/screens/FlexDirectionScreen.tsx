import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={[ styles.box, styles.box1 ]} />
      <View style={[ styles.box, styles.box2 ]} />
      <View style={[ styles.box, styles.box3 ]} />
      <View style={[ styles.box, styles.box4 ]} />
      <View style={[ styles.box, styles.box1 ]} />
      <View style={[ styles.box, styles.box2 ]} />
      <View style={[ styles.box, styles.box3 ]} />
      <View style={[ styles.box, styles.box4 ]} />
      <View style={[ styles.box, styles.box1 ]} />
      <View style={[ styles.box, styles.box2 ]} />
      <View style={[ styles.box, styles.box3 ]} />
      <View style={[ styles.box, styles.box4 ]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
  },
  box2: {
    backgroundColor: '#4240a2',
    // alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: '#2e2d71',
  },
  box4: {
    backgroundColor: '#222155',
  },
});