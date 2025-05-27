import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Pressable, Image } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import DatePicker from '../../components/datePicker/DatePicker';
import moment from 'moment';
import styles from './CompletedHabits.style';
import HabitFilterDropdown from '../../components/buttons/filter/HabitFilterDropdown';
import FilteredHabitList from '../../components/filteredHabits/FilteredHabitList';
import LinearGradient from 'react-native-linear-gradient';
import DeleteHabitButton from '../../components/buttons/deleteHabit/DeleteHabit';
import { ThemeContext } from '../../common/context/ThemeContext';

const CompletedHabitsScreen = () => {
  const { theme } = useContext(ThemeContext);
  const habits = useHabitStore(state => state.habits);
  const completed = useHabitStore(state => state.completed);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const toggleCompleted = useHabitStore(state => state.toggleCompleted);
  const filter = useHabitStore(state => state.filter);
  const showFilter = useHabitStore(state => state.showFilter);
  const [selectedHabitId, setSelectedHabitId] = useState<string | null>(null);

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
      <LinearGradient 
        colors={theme.mode === 'dark' ? ['#000', '#000'] : ['#f2f2f2', '#b0a0bd']}
        style={styles.gradientBackground}
      >
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
            <View style={styles.container}>
              <DatePicker onDateSelect={setSelectedDate} />
              <Text style={[styles.title, { color: theme.text }]}>Completed Habits</Text>

              {completedHabits.length === 0 ? (
                <View style={styles.noHabitsContainer}>
                  <Image source={require('../../assests/no-habit.png')} style={styles.noHabitsImage}/>
                  <Text style={[styles.noText, { color: theme.textSecondary }]}>No habits completed on this day.</Text>
                </View>
              ) : (
                <FlatList
                  data={completedHabits}
                  keyExtractor={(habit) => habit.id}
                  renderItem={({ item }) => (
                    <Pressable                
                        onPress={() =>
                        setSelectedHabitId(
                          item.id === selectedHabitId ? null : item.id,
                        )}
                    >    
                    <View style={[styles.habitItem, { backgroundColor: theme.card }]}>
                      <Text style={[styles.habitText, { color: theme.text }]}>✓ {item.name}</Text>
                      <TouchableOpacity
                        onPress={() => handleToggle(item.id)}
                        style={[
                          styles.checkbox,
                          isCompletedForDate(item.id) && styles.checkboxCompleted,
                        ]}
                      >
                        {isCompletedForDate(item.id) && <Text style={[styles.checkmark, { color: theme.selectedText }]}>✓</Text>}
                      </TouchableOpacity>
                    </View>

                    {/* Show actions if selected */}
                    {selectedHabitId === item.id &&  (
                      <View style={styles.buttonsRow}>
                        <DeleteHabitButton habitId={item.id} />
                        {/* <EditTaskButton index={index} /> */}
                      </View>
                    )}
                  </Pressable>
                  )}
                />
              )}
            </View> 
        }
    </LinearGradient>
    </SafeAreaView>
  );
};

export default CompletedHabitsScreen;

