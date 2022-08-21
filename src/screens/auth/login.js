import React, {useContext} from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';

export const Login = ({ navigation }) => {
  const { setUserStatus} = useContext(AuthContext);
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  const login = () => {
    auth()
  .signInWithEmailAndPassword('janedoe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User logged in successfully!');
    setUserStatus(true);
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      Alert.alert('Email already in use...!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      Alert.alert('Email is invalid...!');
    }

    console.error(error);
  });
  }

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
      <TouchableHighlight onPress={() => login()}>
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