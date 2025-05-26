import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import HabitFilterDropdown from '../../components/buttons/filter/HabitFilterDropdown';
import FilteredHabitList from '../../components/filteredHabits/FilteredHabitList';
import styles from './HabitCalendar.style';
import { ThemeContext } from '../../common/context/ThemeContext';

// Define the type for marked dates
type MarkedDate = {
  marked?: boolean;
  dotColor?: string;
  selected?: boolean;
  selectedColor?: string;
  selectedTextColor?: string;
};

const HabitCalendarScreen = () => {
  const { theme } = useContext(ThemeContext);
  const completed = useHabitStore((state) => state.completed);
  const filter = useHabitStore(state => state.filter);
  const showFilter = useHabitStore(state => state.showFilter);
  if (!theme || !theme.mode) {
  return null; // or a loading spinner
}


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
          <>
            <View style={styles.container}>
              <Text style={[styles.title, { color: theme.text }]}>Habit Streaks</Text>
              <Calendar
                markedDates={markedDates}
                theme={{
                  backgroundColor: theme.mode === 'dark' ? '#000' : '#ffffff',
                  calendarBackground: theme.mode === 'dark' ? '#000' : '#ffffff',
                  textSectionTitleColor: theme.mode === 'dark' ? '#aaa' : '#2d4150',
                  dayTextColor: theme.mode === 'dark' ? '#fff' : '#2d4150',
                  todayTextColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  selectedDayBackgroundColor: '#00adf5',
                  monthTextColor: theme.mode === 'dark' ? '#fff' : '#000',
                  arrowColor: '#00adf5',
                  disabledArrowColor: theme.mode === 'dark' ? '#555' : '#d9e1e8',
                  textDisabledColor: theme.mode === 'dark' ? '#555' : '#d9e1e8',
                  dotColor: '#00adf5',
                  selectedDotColor: '#ffffff',
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

