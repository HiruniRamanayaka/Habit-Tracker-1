import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import styles from './CustomHeader.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const CustomHeader = () => {
    const navigation = useNavigation();
    const [calendarVisible, setCalendarVisible] = useState(false);
    const today = new Date().toISOString().split('T')[0];
    
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
        <TouchableOpacity style={styles.iconButton} onPress={() => setCalendarVisible(true)}>
            <Icon name="calendar-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
            <Icon name="person-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Calendar Modal */}
      <Modal visible={calendarVisible} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
            <View style={styles.calendarContainer}>
                <Calendar/>
                <TouchableOpacity style={styles.closeButton} onPress={() => setCalendarVisible(false)}>
                    <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>

    </View>
  );
};

export default CustomHeader;

//npm install react-native-calendars - calendar