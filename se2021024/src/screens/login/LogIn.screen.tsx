import React from 'react';
import {View, Text, Button} from 'react-native';

const LogInScreen = ({navigation}:any) => {
  return (
    <View>
        <Text>Log In</Text>
        <Button
            title="Log In"
            onPress={() => {
                // Navigate to Home screen
                navigation.navigate('Home');
            }}
        />
    </View>
  );
};

export default LogInScreen;

