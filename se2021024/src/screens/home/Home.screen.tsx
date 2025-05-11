import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../../common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }: any) => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    //await AsyncStorage.removeItem('user');  <--- Delete account
    await AsyncStorage.setItem('isLoggedIn', 'false');
    setUser(null);
    navigation.replace('LogIn');
  };

  return (
    <View>
      <Text>Welcome, {user?.userName}</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
