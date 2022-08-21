import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textbox}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    color: 'red',
    fontSize: 22,
  }
})