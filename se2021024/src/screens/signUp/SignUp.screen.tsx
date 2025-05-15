import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, Text, TextInput, Alert, Image, TouchableOpacity} from 'react-native';
import styles from './SignUpScreen.style'
import { COLORS } from '../../constants/Theme';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUpScreen = ({navigation}:any) => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

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
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subTitle}>Enter your info to keep it going!</Text>
        </View>
        
        <View style={styles.inputWrapper}>
          <FontAwesome name="user" size={20} color={COLORS.iconColor} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={COLORS.gray}
            value={userName}
            onChangeText={setUserName}
            keyboardType="default"
          />
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

        <View style={styles.inputWrapper}>
          <FontAwesome name="lock" size={20} color="#4B0082" />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Confirm password"
            placeholderTextColor={COLORS.gray}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            keyboardType="default"
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons name={showConfirmPassword ? "eye" : "eye-off"} size={20} color={COLORS.iconColor} />
          </TouchableOpacity>
        </View>
        
        {/* button */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* link to login */}
        <View style={styles.linkText}>
          <Text style={styles.text}>
            Already have an account?
          </Text>
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate('LogIn');
            }}
          >
          Log In
          </Text>
        </View>
        
      </View>
    </View>
    </LinearGradient>
  );
};

export default SignUpScreen;


