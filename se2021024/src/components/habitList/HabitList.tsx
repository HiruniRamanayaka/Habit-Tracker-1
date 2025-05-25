import React, { useState } from 'react';
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import styles from './HabitList.style';
import DatePicker from '../datePicker/DatePicker';
import moment from 'moment';
import LottieView from 'lottie-react-native';

const HabitList = () => {
    const habits = useHabitStore(state => state.habits);
    const completed = useHabitStore(state => state.completed);
    const toggleCompleted = useHabitStore(state => state.toggleCompleted);

    // Default to today as selected date
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
    const [showCelebration, setShowCelebration] = useState(false);

    // Get the day name from the selected date (e.g. 'Sun', 'Mon')
    const selectedDay = moment(selectedDate).format('ddd');

    // Filter habits based on selected day
    const filteredHabits = habits.filter(habit => {
        if (habit.frequency === 'daily') {
            return true;
        } else if (habit.frequency === 'weekly') {
            return habit.days.includes(selectedDay);
        } else {
            return false;
        }
    });
    
    // Check if habit is completed for the selected date
    const isCompletedForDate = (habitId: string) => {
      return completed[selectedDate]?.includes(habitId);
    };

    //Show modal when completed
    const handleToggleComplete = (habitId: string) => {
    const alreadyCompleted = isCompletedForDate(habitId);
    toggleCompleted(habitId, selectedDate);

    // Show modal only if it was not completed before
    if (!alreadyCompleted) {
      setShowCelebration(true);
    }
  };

  return (
    <View style={styles.container}>
      <DatePicker onDateSelect={setSelectedDate} />

      {/* Display selected day habits */}
      <View style={styles.habitListContainer}>
      {filteredHabits.length === 0 ? (
        <View style={styles.noHabitsContainer}>
          <Image source={require('../../assests/no-habit.png')} style={styles.noHabitsImage}/>
          <Text style={styles.noHabitsText}>No habits for this day</Text>
        </View>
      ) : (
        <FlatList
          data={filteredHabits}
          keyExtractor={(habit) => habit.id}
          renderItem={({ item }) => (                      
            <View style={styles.habitCard}>
              <Text style={styles.habitName}>{item.name}</Text>
              <TouchableOpacity 
                onPress={() => handleToggleComplete(item.id)}
                style = {[styles.checkbox,  isCompletedForDate(item.id) && styles.checkboxCompleted]}
              >
                {isCompletedForDate(item.id) && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      </View>

      {/* celebration modal */}
      <Modal transparent visible={showCelebration} animationType='fade'>
        <View style={styles.celebrationModal}>
          <View style={styles.modal}>
            <LottieView
              source={require('../../assests/celebration.json')}
              autoPlay
              loop={false}
              style={styles.lottieView}
            />
            <Text style={styles.celebrationText}>Well Done!</Text>

            {/* Close button */}
            <TouchableOpacity
              onPress={() => setShowCelebration(false)}
              style={{
                marginTop: 20,
                backgroundColor: '#dedede',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>

  );
};

export default HabitList;
