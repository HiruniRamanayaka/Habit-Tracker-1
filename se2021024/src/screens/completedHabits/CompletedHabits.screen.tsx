import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import DatePicker from '../../components/datePicker/DatePicker';
import moment from 'moment';
import styles from './CompletedHabits.style';

const CompletedHabitsScreen = () => {
  const habits = useHabitStore(state => state.habits);
  const completed = useHabitStore(state => state.completed);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

  const completedHabits = habits.filter(habit =>
    completed[selectedDate]?.includes(habit.id)
  );

  return (
    <View style={styles.container}>
      <DatePicker onDateSelect={setSelectedDate} />
      <Text style={styles.title}>Completed Habits</Text>

      {completedHabits.length === 0 ? (
        <Text style={styles.noText}>No habits completed on this day.</Text>
      ) : (
        <FlatList
          data={completedHabits}
          keyExtractor={(habit) => habit.id}
          renderItem={({ item }) => (
            <View style={styles.habitItem}>
              <Text style={styles.habitText}>✓ {item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CompletedHabitsScreen;

