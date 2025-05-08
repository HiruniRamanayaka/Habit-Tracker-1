import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../screens/login/LogIn.screen';
import SignUpScreen from '../screens/signUp/SignUp.screen';
import HomeScreen from '../screens/home/Home.screen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
