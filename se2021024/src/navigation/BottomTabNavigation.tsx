// navigation/BottomTabNavigator.tsx
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/Home.screen';
import AnotherScreen from '../screens/AnotherScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HabitInput from '../components/habitInput/HabitInput';
import { COLORS } from '../constants/Theme';
import ProgressScreen from '../screens/progress/Progress.screen';
import HabitCalendar from '../screens/habitCalendar/HabitCalendar.screen';
import HabitCalendarScreen from '../screens/habitCalendar/HabitCalendar.screen';
import AddHabitScreen from '../screens/addHabit/AddHabit.screen';
import { ThemeContext } from '../common/context/ThemeContext';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = '';

          if (route.name === 'HomeTab') iconName = 'home-outline';
          else if (route.name === 'ProgressTab') iconName = 'trending-up-outline';
          else if (route.name === 'AddHabitTab') iconName = 'add';
          else if (route.name === 'CalendarTab') iconName = 'calendar-outline';

          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarStyle: {
          height: 100,
          backgroundColor: theme.tabBar,
        },
        tabBarLabelStyle: {
          marginTop: 4,      // space between icon and label
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginTop: 6,      // moves icon down
        },
        tabBarActiveTintColor: isDarkMode ? '#ac81ca' : COLORS.background,
        tabBarInactiveTintColor: isDarkMode ? '#aaa' : COLORS.darkGray,
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="AddHabitTab" component={AddHabitScreen} options={{title: 'Add Habits'}} />
      <Tab.Screen name="ProgressTab" component={ProgressScreen} options={{ title: 'Progress' }} />
      <Tab.Screen name="CalendarTab" component={HabitCalendarScreen} options={{ title: 'Habit Streaks' }} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
