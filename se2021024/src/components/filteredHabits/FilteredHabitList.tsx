import React from 'react';
import { View, Text } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import { Habit } from '../../types';
import { Calendar } from 'react-native-calendars';

const FilteredHabitList = () => {
  const { habits, completed, filter } = useHabitStore();

  const today = moment();
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

  return (
    <View style={{ padding: 16 }}>
      {filteredHabits.length === 0 ? (
        <Text>No habits to show</Text>
      ) : (
        filteredHabits.map(habit => (
          <View key={habit.id} style={{ marginBottom: 10 }}>
            {/* show all habits  */}
            {filter === 'all' && (
              <>
                <Text style={{ fontSize: 16 }}>{habit.name}</Text>
                <Text>Frequency: {habit.frequency}</Text>
                {habit.frequency === 'weekly' && (
                  <Text>Days: {habit.days.join(', ')}</Text>
                )}
              </>
            )}

            {/* show today habits */}
            {filter === 'today' && (
              <>
                <Text style={{ fontSize: 16 }}>{habit.name}</Text>
              </>
            )}

            {/* show completed habits */}
            {filter === 'completed' && (
              <View>
                <Text style={{ fontSize: 16 }}>{habit.name}</Text>
                <Text>Completed on:</Text>
                {(() => {
                  const dates = [];
                  for (const date in completed) {
                    if (completed[date].includes(habit.id)) {
                      dates.push(date);
                    }
                  }
                  return dates.map(date => <Text key={date}>- {date}</Text>);
                })()}
              </View>
            )}
          </View>
        ))
      )}
    </View>
  );
};

export default FilteredHabitList;
