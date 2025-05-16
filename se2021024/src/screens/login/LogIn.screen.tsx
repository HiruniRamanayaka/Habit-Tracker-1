import React, { useContext, useState } from 'react';
import {View, Text, Button, TextInput, Alert, Image, TouchableOpacity} from 'react-native';
import { UserContext } from '../../common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LoginScreen.style'
import { COLORS } from '../../constants/Theme';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';

const LogInScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);

  const handleLogin = async () => {
    // check all fields filled or not
    if(!email || !password) {
      Alert.alert('Please fill all fields');
      return;
      }

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
      // Navigate to Home screen after log in
      navigation.replace('HomeDrawer');
    }else{
      Alert.alert('Invalid Credentials.')
    }
  };

  return (
    <LinearGradient 
      colors={['#000000', '#4B0082']} 
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assests/logo-white.png')}
          style={styles.backgroundImage}
        />
      <View style={styles.inputContainer}>
        <View style={styles.inputTitles}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subTitle}>Enter your email and password</Text>
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope" size={20} color={COLORS.iconColor} />
          <TextInput 
            style={styles.input}
            placeholder="Email" 
            placeholderTextColor={COLORS.gray}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome name="lock" size={20} color={COLORS.iconColor} />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            placeholderTextColor={COLORS.gray} 
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} 
            keyboardType="default"
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color={COLORS.iconColor} />
          </TouchableOpacity>
        </View>

        {/* checkbox for remember me and forgot password*/}
        <View style={styles.endContainer}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={{ marginVertical: 10 }}
              onClick={() => setChecked(!checked)}
              isChecked={checked}
              checkBoxColor={COLORS.background}
            />
            <Text style={styles.label}>Remember Me</Text>
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.label}>Forgot password</Text>
          </View>
        </View>

        {/* button */}
        <TouchableOpacity 
            style={styles.button}
            onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* link to login */}
        <View style={styles.linkText}>
          <Text style={styles.text}>
            Don't have an account?
          </Text>
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
          Sign Up
          </Text>
        </View>

        </View>
      </View>
    </LinearGradient>
  );
};

export default LogInScreen;

// npm i react-native-check-box --save
// npm i --save-dev @types/react-native-check-box