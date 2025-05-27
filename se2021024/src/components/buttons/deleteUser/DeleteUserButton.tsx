import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
      <TouchableOpacity onPress={handleDelete}>
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteUserButton;

const styles = StyleSheet.create({
  deleteText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
