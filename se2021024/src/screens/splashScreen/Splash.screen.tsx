import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const SplashScreen = ({ onReady }: { onReady: () => void }) => {
  useEffect(() => {
    // Simulate a delay for splash screen (for async data fetch)
    setTimeout(() => {
      onReady();  // Call the callback to move to the next screen
    }, 2000); // Wait for 2 seconds
  }, [onReady]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
