import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './TopBar.style'; // Make sure you define styles
import { COLORS } from '../../constants/Theme';

const TopBar = ({ openSidebar, navigation }: any) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <View style={styles.topBar}>
      {/* Hamburger Menu */}
      <TouchableOpacity onPress={openSidebar}>
        <FontAwesome name="bars" size={24} color={COLORS.black} />
      </TouchableOpacity>

      {/* App Name */}
      <Text style={styles.appTitle}>Your App</Text>

      {/* Calendar Icon */}
      <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
        <FontAwesome name="calendar" size={24} color={COLORS.black} />
      </TouchableOpacity>

      {/* Profile Icon */}
      <TouchableOpacity onPress={() => setShowProfileMenu(!showProfileMenu)}>
        <FontAwesome name="user-circle" size={24} color={COLORS.black} />
      </TouchableOpacity>

    </View>
  );
};

export default TopBar;

// npm install @react-navigation/native @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view
