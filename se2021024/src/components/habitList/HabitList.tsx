import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import styles from './HabitList.style';
import DatePicker from '../datePicker/DatePicker';
import moment from 'moment';

const HabitList = () => {
    const habits = useHabitStore(state => state.habits);
    const completed = useHabitStore(state => state.completed);
    const toggleCompleted = useHabitStore(state => state.toggleCompleted);

    // Default to today as selected date
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

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
                onPress={() => toggleCompleted(item.id, selectedDate)}
                style = {[styles.checkbox,  isCompletedForDate(item.id) && styles.checkboxCompleted]}
              >
                {isCompletedForDate(item.id) && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      </View>
    </View>
  );
};

export default HabitList;
