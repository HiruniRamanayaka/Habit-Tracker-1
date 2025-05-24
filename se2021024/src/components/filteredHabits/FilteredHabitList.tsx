import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import { Habit } from '../../types';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/Theme';
import styles from './FilteredHabit.style';
import { FlatList } from 'react-native-gesture-handler';

const FilteredHabitList = () => {
  const { habits, completed, filter } = useHabitStore();
  const [visibleCalendarHabitId, setVisibleCalendarHabitId] = useState<string | null>(null);

  const today = moment();
  const todayDate = today.format('YYYY-MM-DD');
  const todayDay = today.format('ddd'); // e.g. "Mon", "Tue"

  let filteredHabits: Habit[] = [];

  if (filter === 'all') {
    filteredHabits = habits;
  } else if (filter === 'today') {
    filteredHabits = habits.filter(habit => {
      if (habit.frequency === 'daily') {
        return true;
      } else if (habit.frequency === 'weekly') {
        return habit.days.includes(todayDay);
      }
      return false;
    });
  } else if (filter === 'completed') {
    filteredHabits = habits.filter(habit => {
      // Check if habit id is in any completed date list
      for (const date in completed) {
        if (completed[date].includes(habit.id)) {
          return true;
        }
      }
      return false;
    });
  }

  //Create completed habits dates marked on calendar
  const getMarkedDatesForHabit = (habitId: string) => {
    const markedDates: { [date: string]: any } = {};
    for (const date in completed) {
      if (completed[date].includes(habitId)) {
        markedDates[date] = {
          marked: true,
          dotColor: COLORS.lightPurple,
          selectedColor: COLORS.primaryBtn,
          selected: true,
        };
      }
    }
    return markedDates;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {filteredHabits.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image 
            source={require('../../assests/no-habit.png')} 
            style={styles.emptyImage}
            resizeMode="contain"
          />
          <Text style={styles.emptyText}>No habits to show</Text>
        </View>
      ) : (
        <FlatList
          data={filteredHabits}
          keyExtractor={(habit) => habit.id}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({item}) => (
          <View key={item.id} style={styles.filteredHabits}>

            {/* show all habits  */}
            {filter === 'all' && (
              <View style={styles.allHabits} >
                <Text style={styles.habitName}>{item.name}</Text>
                <Text style={styles.habitDetail}>Frequency: {item.frequency}</Text>
                {item.frequency === 'weekly' && (
                  <Text style={styles.habitDetail}>Days: {item.days.join(', ')}</Text>
                )}
                <View style={styles.habitRow}>
                  <Text style={styles.habitDetail}>
                    Status Today:{' '}
                  </Text>
                  <Text style={[styles.habitStatus, {color: completed[todayDate]?.includes(item.id) ? 'green' : 'red',}]}>
                    {completed[todayDate]?.includes(item.id) ? 'Completed' : 'Not Completed'}
                  </Text>
                </View>
              </View>
            )}

            {/* show today habits */}
            {filter === 'today' && (
              <View style={styles.todayHabits}>
                <Text style={styles.habitName}>{item.name}</Text>
                <Text style={[styles.habitStatus, {color: completed[todayDate]?.includes(item.id) ? 'green' : 'red',}]}>
                    {completed[todayDate]?.includes(item.id) ? 'Completed' : 'Not Completed'}
                </Text>
              </View>
            )}

            {/* show completed habits */}
            {filter === 'completed' && (
            <View style={styles.completedHabits}>
              <View style={styles.completedHeader}>
              <Text style={styles.habitName}>{item.name}</Text>
              {/* <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
                Completed Dates:
              </Text> */}
              <TouchableOpacity
                  onPress={() => {
                    if (visibleCalendarHabitId === item.id) {
                      setVisibleCalendarHabitId(null); // hide calendar
                    } else {
                      setVisibleCalendarHabitId(item.id); // show calendar
                    }
                  }}
                >
                  <Icon name="calendar" size={24} color="#333" />
              </TouchableOpacity>
              </View>

                {visibleCalendarHabitId === item.id && (
                  <View style={styles.calendarWrapper}>
                    <Calendar markedDates={getMarkedDatesForHabit(item.id)} />
                  </View>
                )}
              {/* <Calendar markedDates={markedDates} /> */}
            </View>
          )}

          </View>

        )}
        />
      )}
    </SafeAreaView>
  );
};

export default FilteredHabitList;       