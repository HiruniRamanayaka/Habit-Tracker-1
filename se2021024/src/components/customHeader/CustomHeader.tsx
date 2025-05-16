import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CustomHeader.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        
      <View style={styles.leftContainer}>
      {/* Hamburger Icon */}
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.iconButton}
      >
        <Icon name="menu-outline" size={28} color="#333" />
      </TouchableOpacity>

      {/* App Title */}
      <Text style={styles.title}>StepWise</Text>
      </View>

      {/* Calendar & Profile Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
            <Icon name="calendar-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
            <Icon name="person-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>


    </View>
  );
};

export default CustomHeader;