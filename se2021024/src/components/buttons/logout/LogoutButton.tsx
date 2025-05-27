import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../../../common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHabitStore } from '../../../store/tasks/useHabitStore';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './LogoutButton.style';

const LogoutButton = ({ navigation }: any) => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    useHabitStore.setState({
      habits: [],
      completed: {},
      filter: 'none',
      showFilter: false,
    });

    await AsyncStorage.removeItem('habit-storage'); // Clear persistent key
    setUser(null);
    navigation.replace('LogIn');
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={styles.button}>
      <Icon name="exit-outline" size={24} color="red" style={styles.icon} />
      <Text style={styles.text}>Log Out</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;

