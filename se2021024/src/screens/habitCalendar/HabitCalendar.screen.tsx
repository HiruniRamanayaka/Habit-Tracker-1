import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import HabitFilterDropdown from '../../components/buttons/filter/HabitFilterDropdown';
import FilteredHabitList from '../../components/filteredHabits/FilteredHabitList';
import styles from './HabitCalendar.style';

// Define the type for marked dates
type MarkedDate = {
  marked?: boolean;
  dotColor?: string;
  selected?: boolean;
  selectedColor?: string;
  selectedTextColor?: string;
};

const HabitCalendarScreen = () => {
  const completed = useHabitStore((state) => state.completed);
  const filter = useHabitStore(state => state.filter);
  const showFilter = useHabitStore(state => state.showFilter);

  const markedDates: { [key: string]: MarkedDate } = {}; // this object will use string keys

  // Get today's date
  const today = moment().format('YYYY-MM-DD');

  // Loop through the last 30 days
  for (let i = 0; i <= 30; i++) {
    const today = moment();
    const pastDate = today.subtract(i, 'days');  // Go back i days
    const date = pastDate.format('YYYY-MM-DD');

    if (completed[date] && completed[date].length > 0) {
      markedDates[date] = {
        marked: true,
        dotColor: 'white',
        selected: true,
        selectedColor: 'green',
        selectedTextColor: 'white',
      };
    } else {
      markedDates[date] = {
        marked: true,
        dotColor: 'red',
      };
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient colors={['#f2f2f2', '#b0a0bd']} style={styles.gradientBackground}>
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
            <View style={styles.container}>
              <Text style={styles.title}>Habit Streaks</Text>
              <Calendar
                markedDates={markedDates}
                theme={{
                  todayTextColor: '#00adf5',
                  arrowColor: '#00adf5',
                }}
                style={styles.calendar}
              />
            </View>
          </>  
        }

      </LinearGradient>
    </SafeAreaView>
  );
};

export default HabitCalendarScreen;

