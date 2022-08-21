import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';

export const Register = ({ navigation }) => {

  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email Address"
        keyboardType="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />
      <TouchableHighlight onPress={() => {Alert.alert('Account Created Successfully')}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.noAccount}>Already have an account?</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Login')}>
        <View>
          <Text style={styles.link}>Login</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 15
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 16
  },
  noAccount: {
    marginTop: 20
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 16
  }
})