import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../../common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutButton from '../../components/buttons/logout/LogoutButton';
import DeleteUserButton from '../../components/buttons/delete/DeleteUserButton';

const HomeScreen = ({ navigation }: any) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <View>
      <Text>Welcome, {user?.userName}</Text>
      <LogoutButton navigation={navigation}/>
      <DeleteUserButton navigation={navigation}/>
    </View>
  );
};

export default HomeScreen;
