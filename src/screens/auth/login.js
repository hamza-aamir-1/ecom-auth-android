import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';

export const Login = ({ navigation }) => {

  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
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
      <TouchableHighlight onPress={() => {Alert.alert('Logged in Successfully')}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.noAccount}>Don't Have an Account?</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Register')}>
        <View>
          <Text style={styles.link}>SignUp</Text>
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