import React, {useContext} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, Text, Button, TextInput, Alert} from 'react-native';

const SignUpScreen = ({navigation}:any) => {
  const [userName, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  const handleSignUp = async () => {
    // check all fields filled or not
    if(!userName || !email || !password || !confirmPassword) {
      Alert.alert('Please fill all fields');
      return;
    }
    // check password and confirmed password matched
    if(password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
    
    try {
      await AsyncStorage.setItem('user', JSON.stringify({userName, email, password}));
      Alert.alert('Sign up succeful! Please log in.');
      console.log('User signed up with:', { userName, email, password });
      // Navigate to LogIn screen after sign-up
      navigation.replace('LogIn');
    } catch (error) {
      Alert.alert('Sign up unsuccessful');
    }
  };

  return (
    <View>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="username"
          value={userName}
          onChangeText={setUserName}
          keyboardType="default"
        />
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          keyboardType="default"
        />
        <TextInput
          placeholder="confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          keyboardType="default"
        />
        <Button
          title="Sign Up"
          onPress={handleSignUp}
        />
        <Text
          onPress={() => {
            navigation.navigate('LogIn');
          }}
        >
          Already have an account? Log In
        </Text>
    </View>
  );
};

export default SignUpScreen;
