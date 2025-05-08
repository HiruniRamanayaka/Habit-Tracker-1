import React from 'react';
import {View, Text, Button} from 'react-native';

const SignUpScreen = ({navigation}:any) => {
  return (
    <View>
        <Text>Sign Up</Text>
        <Button
          title="Sign Up"
          onPress={() => {
            // Navigate to Log In screen
            navigation.navigate('LogIn');
          }}
        />
    </View>
  );
};

export default SignUpScreen;
