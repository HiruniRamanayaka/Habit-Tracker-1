import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import styles from './HabitList.style';
import DatePicker from '../datePicker/DatePicker';
import moment from 'moment';

const HabitList = () => {
    const habits = useHabitStore(state => state.habits);
    const [selectedDate, setSelectedDate] = useState('');

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

    
  return (
    <View style={styles.container}>
      <DatePicker onDateSelect={setSelectedDate} />

      {filteredHabits.length === 0 ? (
        <View style={styles.noHabitsContainer}>
          <Image source={require('../../assests/no-habit.png')} style={styles.noHabitsImage}/>
          <Text style={styles.noHabitsText}>No habits for this day</Text>
        </View>
      ) : (
        filteredHabits.map((habit, index) => (
          <View key={index} >
            <Text style={styles.habitCard}>{habit.name}</Text>
            {/* <Text style={styles.habitFrequency}>{habit.frequency}</Text>
            {habit.frequency === 'weekly' && (
              <Text style={styles.habitDays}>{`Days: ${habit.days.join(', ')}`}</Text>
            )} */}
          </View>
        ))
      )}
    </View>
  );
};

export default HabitList;
