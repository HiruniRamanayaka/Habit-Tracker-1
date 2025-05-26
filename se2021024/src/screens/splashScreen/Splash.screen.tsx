import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';
import styles from './SplashScrren.style';

const SplashScreen = ({ onReady }: { onReady: () => void }) => {
  useEffect(() => {
    // Simulate a delay for splash screen (for async data fetch)
    setTimeout(() => {
      onReady();  // Call the callback to move to the next screen
    }, 2000); // Wait for 2 seconds
  }, [onReady]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
      source={require('../../assests/first.png')}
      style={styles.image}
      resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title1} >Build Good Habits, </Text>
        <Text style={styles.title2}>Break Bad Ones!</Text>
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
        <Text style={styles.loadingText} >Loading...</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

