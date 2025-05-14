import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../../../common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeleteUserButton = ({ navigation }: any) => {
  const { setUser } = useContext(UserContext);

  const handleDelete = async () => {
    await AsyncStorage.setItem('actionType', 'delete'); // Store action
    await AsyncStorage.removeItem('user');  // Delete account
    await AsyncStorage.setItem('isLoggedIn', 'false');
    setUser(null);
    navigation.replace('SignUp');
  };

  return (
    <View>
      <Button title="Delete Account" onPress={handleDelete} />
    </View>
  );
};

export default DeleteUserButton;
