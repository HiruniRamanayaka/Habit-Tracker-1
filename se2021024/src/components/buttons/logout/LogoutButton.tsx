import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../../../common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHabitStore } from '../../../store/tasks/useHabitStore';

const LogoutButton = ({ navigation }: any) => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    //await AsyncStorage.removeItem('user');  <--- Delete account
    // await AsyncStorage.setItem('actionType', 'logout'); // Store action
    // await AsyncStorage.setItem('isLoggedIn', 'false');
    useHabitStore.getState().clearHabits();
    await AsyncStorage.removeItem('habit-storage'); // Clear persistent key
    setUser(null);
    navigation.replace('LogIn');
  };

  return (
    <View>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default LogoutButton;
