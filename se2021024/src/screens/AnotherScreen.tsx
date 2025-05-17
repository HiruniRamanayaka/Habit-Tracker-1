import React from 'react';
import { View, Text, Button } from 'react-native';

const AnotherScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Another Screen</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default AnotherScreen;
