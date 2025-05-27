import React, { useContext, useState } from 'react';
import { FlatList, Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import styles from './HabitList.style';
import DatePicker from '../datePicker/DatePicker';
import moment from 'moment';
import LottieView from 'lottie-react-native';
import DeleteHabitButton from '../buttons/deleteHabit/DeleteHabit';
import EditTaskButton from '../buttons/editHabit/EditHabitButton';
import { ThemeContext } from '../../common/context/ThemeContext';
import HabitInfoButton from '../buttons/habitInfo/HabitInfoButton';

const HabitList = () => {
    const { theme } = useContext(ThemeContext);
    const habits = useHabitStore(state => state.habits);
    const completed = useHabitStore(state => state.completed);
    const toggleCompleted = useHabitStore(state => state.toggleCompleted);
    const [selectedHabitId, setSelectedHabitId] = useState<string | null>(null);

    // Default to today as selected date
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
    const [showCelebration, setShowCelebration] = useState(false);

    // Get the day name from the selected date (e.g. 'Sun', 'Mon')
    const selectedDay = moment(selectedDate).format('ddd');

    // Filter habits based on selected day
    const filteredHabits = habits.filter(habit => {
        const createdAt = moment(habit.createdAt, 'YYYY-MM-DD');
        const selected = moment(selectedDate, 'YYYY-MM-DD');

        // Do not show habit on dates before it was created
        if (selected < createdAt) {
          return false;
        }

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
    <View style={[styles.container]}>
      <DatePicker onDateSelect={setSelectedDate} />

      {/* Display selected day habits */}
      <View style={styles.habitListContainer}>
      {filteredHabits.length === 0 ? (
        <View style={styles.noHabitsContainer}>
          <Image source={require('../../assests/no-habit.png')} style={styles.noHabitsImage}/>
          <Text style={[styles.noHabitsText, { color: theme.text }]}>No habits for this day</Text>
        </View>
      ) : (
        <FlatList
          data={filteredHabits}
          keyExtractor={(habit) => habit.id}
          renderItem={({ item }) => (
            <Pressable                
              onPress={() =>
                setSelectedHabitId(
                  item.id === selectedHabitId ? null : item.id,
                )
              }
            >                     
              <View style={[styles.habitCard, { backgroundColor: theme.card }]}>
                <Text style={[styles.habitName, { color: theme.text }]}>{item.name}</Text>
                <TouchableOpacity 
                  onPress={() => handleToggleComplete(item.id)}
                  style={[styles.checkbox,
                    {
                      backgroundColor: isCompletedForDate(item.id)
                        ? theme.checkboxChecked
                        : 'transparent',
                      borderColor: isCompletedForDate(item.id)
                        ? theme.checkboxChecked
                        : '#888888',
                      borderWidth: 2,
                    },]}
                >
                  {isCompletedForDate(item.id) && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              </View>

              {/* Show actions if selected */}
              {selectedHabitId === item.id &&  (
                <View style={styles.buttonsRow}>
                  <DeleteHabitButton habitId={item.id} />
                  <EditTaskButton habit={item}/>
                  <HabitInfoButton habit={item} />
                </View>
              )}
            </Pressable>
          )}
        />
      )}
      </View>
      

      {/* celebration modal */}
      <Modal transparent visible={showCelebration} animationType='fade'>
        <View style={[styles.celebrationModal]}>
          <View style={[
              styles.modal,
              { backgroundColor: theme.card, borderColor: theme.text, borderWidth: 1 },
            ]}>
            <LottieView
              source={require('../../assests/celebration.json')}
              autoPlay
              loop={false}
              style={styles.lottieView}
            />
            <Text style={[styles.celebrationText, { color: theme.text }]}>Well Done!</Text>

            {/* Close button */}
            <TouchableOpacity
              onPress={() => setShowCelebration(false)}
              style={{
                marginTop: 20,
                backgroundColor: theme.fab || '#dedede',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Text style={[styles.closeText, { color: theme.text }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      

    </View>

  );
};

export default HabitList;
