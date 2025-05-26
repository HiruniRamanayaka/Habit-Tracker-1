import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, SafeAreaView} from 'react-native';
import styles from './CustomHeader.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import { ThemeContext } from '../../common/context/ThemeContext';

const CustomHeader = () => {
    const navigation = useNavigation();
    const [calendarVisible, setCalendarVisible] = useState(false);
    const toggleShowFilter = useHabitStore(state => state.toggleShowFilter);
    const { theme } = useContext(ThemeContext);
    
  return (
    <SafeAreaView>
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.leftContainer}>
      {/* Hamburger Icon */}
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.iconButton}
      >
        <Icon name="menu-outline" size={28} color={theme.icon} />
      </TouchableOpacity>

      {/* App Title */}
      <Text style={[styles.title, { color: theme.text }]}>StepWise</Text>
      </View>

      {/* Filter & Calendar & Profile Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={toggleShowFilter}>
            <Icon name="options" size={24} color={theme.icon} />
        </TouchableOpacity>  
        <TouchableOpacity style={styles.iconButton} onPress={() => setCalendarVisible(true)}>
            <Icon name="calendar-outline" size={24} color={theme.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
            <Icon name="person-circle-outline" size={24} color={theme.icon} />
        </TouchableOpacity>
      </View>

      {/* Calendar Modal */}
      <Modal visible={calendarVisible} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
            <View style={[styles.calendarContainer, { backgroundColor: theme.card }]}>
                <Calendar theme={{ calendarBackground: theme.card, dayTextColor: theme.text, monthTextColor: theme.text }}/>
                <TouchableOpacity style={[styles.closeButton, { backgroundColor: theme.button }]} onPress={() => setCalendarVisible(false)}>
                    <Text style={[styles.closeText, { color: theme.text }]}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>

    </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

//npm install react-native-calendars - calendar
//npm install moment   - to generate date strings