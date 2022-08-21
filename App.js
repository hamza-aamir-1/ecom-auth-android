import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './src/screens/appNavigation';
import { AuthContextProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    </AuthContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})