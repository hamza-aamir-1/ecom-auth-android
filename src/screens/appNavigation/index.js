import React, {useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../frontend/Home/Home';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { AuthContext } from '../../context/AuthContext';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {

    const { userStatus} = useContext(AuthContext);
    const isAuthenticated = userStatus;

  return (
    <Stack.Navigator>

        {
            isAuthenticated ? 
            (<Stack.Group>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Group>)
             : 
             (<Stack.Group initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Group>)
        }
    </Stack.Navigator>
  )
}