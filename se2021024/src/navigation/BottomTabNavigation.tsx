// navigation/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/Home.screen';
import AnotherScreen from '../screens/AnotherScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HabitInput from '../components/habitInput/HabitInput';
import { COLORS } from '../constants/Theme';
import ProgressScreen from '../screens/progress/Progress.screen';
import HabitCalendar from '../screens/habitCalendar/HabitCalendar.screen';
import HabitCalendarScreen from '../screens/habitCalendar/HabitCalendar.screen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          if (route.name === 'HomeTab') iconName = 'home-outline';
          else if (route.name === 'ProgressTab') iconName = 'trending-up-outline';
          else if (route.name === 'AddHabitTab') iconName = 'add';
          else if (route.name === 'CalendarTab') iconName = 'calendar-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.background,
        tabBarInactiveTintColor: COLORS.darkGray,
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="AddHabitTab" component={HabitInput} options={{title: 'Add Habits'}} />
      <Tab.Screen name="ProgressTab" component={ProgressScreen} options={{ title: 'Progress' }} />
      <Tab.Screen name="CalendarTab" component={HabitCalendarScreen} options={{ title: 'Habit Streaks' }} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
