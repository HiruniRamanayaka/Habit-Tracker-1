import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import DatePicker from '../../components/datePicker/DatePicker';
import moment from 'moment';
import styles from './CompletedHabits.style';
import HabitFilterDropdown from '../../components/buttons/filter/HabitFilterDropdown';
import FilteredHabitList from '../../components/filteredHabits/FilteredHabitList';
import LinearGradient from 'react-native-linear-gradient';

const CompletedHabitsScreen = () => {
  const habits = useHabitStore(state => state.habits);
  const completed = useHabitStore(state => state.completed);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const toggleCompleted = useHabitStore(state => state.toggleCompleted);
  const filter = useHabitStore(state => state.filter);
  const showFilter = useHabitStore(state => state.showFilter);

  const isCompletedForDate = (habitId: string) => {
    return completed[selectedDate]?.includes(habitId);
  };

  const handleToggle = (habitId: string) => {
    toggleCompleted(habitId, selectedDate);
  };

  const completedHabits = habits.filter(habit =>
    completed[selectedDate]?.includes(habit.id)
  );

  return (
    <SafeAreaView style={styles.screen}>
      
      {/*show filter dropdown and filtered habits */}
        {showFilter && (
          <View style={{ flex: 1, padding: 16 }}>
            <HabitFilterDropdown />
            <View style={{ flex: 1 }}>
              <FilteredHabitList />
            </View>
          </View>
        )}

        {/* Default habit list (only if filter is "none" and dropdown is hidden) */}
        {!showFilter && filter === 'none' && 
          <>
          <LinearGradient colors={['#f2f2f2', '#b0a0bd']} style={styles.gradientBackground}>
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
                      <TouchableOpacity
                        onPress={() => handleToggle(item.id)}
                        style={[
                          styles.checkbox,
                          isCompletedForDate(item.id) && styles.checkboxCompleted,
                        ]}
                      >
                        {isCompletedForDate(item.id) && <Text style={styles.checkmark}>✓</Text>}
                      </TouchableOpacity>
                    </View>
                  )}
                />
              )}
            </View>
            </LinearGradient>
          </>  
        }

    </SafeAreaView>
  );
};

export default CompletedHabitsScreen;

