import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../screens/login/LogIn.screen';
import SignUpScreen from '../screens/signUp/SignUp.screen';
import HomeScreen from '../screens/home/Home.screen';
import { UserContext, UserType } from '../common/context/userContext';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [user, setUser] = useState<UserType>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </UserContext.Provider>
  );
};

export default AppNavigation;
