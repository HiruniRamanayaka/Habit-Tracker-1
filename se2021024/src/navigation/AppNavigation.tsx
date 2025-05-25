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
import WeeklyProgressScreen from '../screens/weeklyProgress/WeeklyProgress.screen';
import CustomDrawer from '../components/customDrawer/CustomDrawer';
import { COLORS } from '../constants/Theme';
import BottomTabNavigator from './BottomTabNavigation';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        header: () => <CustomHeader />, // Custom header here screens
        drawerActiveBackgroundColor:'#e4d1ff', // background color when active
        drawerActiveTintColor: COLORS.background,       // Text/icon color when active
        drawerInactiveTintColor: '#333',       // Text/icon color when not active
        drawerStyle: {
          backgroundColor: '#fff',
          width: 270,
        },
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Another" component={AnotherScreen} />
      <Drawer.Screen name="CompletedHabits" component={CompletedHabitsScreen} />
      <Drawer.Screen name="Weekly Progress" component={WeeklyProgressScreen} />
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
