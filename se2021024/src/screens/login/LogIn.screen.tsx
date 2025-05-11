import React, { useContext, useState } from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import { UserContext } from '../../common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogInScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext);

  const handleLogin = async () => {
    const stored = await AsyncStorage.getItem('user');
    if(!stored){
      Alert.alert('No account found. Sign up first.');
      return;
    }

    const userData = JSON.parse(stored);
    if (userData.email === email && userData.password === password) {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      setUser({ 
        userName: userData.userName, 
        email: userData.email, 
        password: userData.password 
      });
      navigation.replace('Home');
    }else{
      Alert.alert('Invalid Credentials.')
    }
  };

  return (
    <View>
        <Text>Log In</Text>
        <TextInput 
          placeholder="Email" 
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          placeholder="Password" 
          value={password}
          onChangeText={setPassword}
        />
        <Button
            title="Log In"
            onPress={handleLogin}
        />
        <Text
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          Don't have an account? Sign Up
        </Text>
    </View>
  );
};

export default LogInScreen;

