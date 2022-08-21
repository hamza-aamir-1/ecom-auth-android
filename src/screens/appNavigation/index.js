import React from 'react';
import { View, Text } from 'react-native';
import { Home } from '../frontend/Home/Home';
import { Login } from '../auth/Login'

export const AppNavigation = () => {
  return (
    <View>
      <Text>App Navigation file</Text>
      <Home />
      <Login />
    </View>
  )
}