import React, {useState, useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogInScreen from '../screens/login/LogIn.screen';
import SignUpScreen from '../screens/signUp/SignUp.screen';
import { UserContext, UserType } from '../common/context/userContext';
import CustomHeader from '../components/customHeader/CustomHeader';
import SettingsScreen from '../screens/settings/Settings';
import CompletedHabitsScreen from '../screens/completedHabits/CompletedHabits.screen';
import WeeklyProgressScreen from '../screens/weeklyProgress/WeeklyProgress.screen';
import CustomDrawer from '../components/customDrawer/CustomDrawer';
import BottomTabNavigator from './BottomTabNavigation';
import { ThemeContext } from '../common/context/ThemeContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        header: () => <CustomHeader />, // Custom header here screens
        drawerActiveBackgroundColor: theme.mode === 'dark' ? '#333' : '#e4d1ff', // background color when active
        drawerActiveTintColor: theme.text,                                       // Text/icon color when active
        drawerInactiveTintColor: theme.mode === 'dark' ? '#ccc' : '#333',      // Text/icon color when not active
        drawerStyle: {
          backgroundColor: theme.background,
          width: 270,
        },
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Completed Habits" component={CompletedHabitsScreen} />
      <Drawer.Screen name="Weekly Progress" component={WeeklyProgressScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
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
