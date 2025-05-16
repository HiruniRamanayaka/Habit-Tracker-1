import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogInScreen from '../screens/login/LogIn.screen';
import SignUpScreen from '../screens/signUp/SignUp.screen';
import HomeScreen from '../screens/home/Home.screen';
import { UserContext, UserType } from '../common/context/userContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true, // Show header in drawer screens
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* Add more screens here */}
    </Drawer.Navigator>
  );
};

const AppNavigation = ({ initialRoute }: { initialRoute: string }) => {
  const [user, setUser] = useState<UserType>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeDrawer" component={DrawerNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </UserContext.Provider>
  );
};

export default AppNavigation;
