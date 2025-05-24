import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogInScreen from '../screens/login/LogIn.screen';
import SignUpScreen from '../screens/signUp/SignUp.screen';
import HomeScreen from '../screens/home/Home.screen';
import { UserContext, UserType } from '../common/context/userContext';
import CustomHeader from '../components/customHeader/CustomHeader';
import AnotherScreen from '../screens/AnotherScreen';
import CompletedHabitsScreen from '../screens/completedHabits/CompletedHabits.screen';
import ProgressScreen from '../screens/progress/Progress.screen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <CustomHeader />, // Custom header here screens
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Another" component={AnotherScreen} />
      <Drawer.Screen name="CompletedHabits" component={CompletedHabitsScreen} />
      <Drawer.Screen name="Progress" component={ProgressScreen} />
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
