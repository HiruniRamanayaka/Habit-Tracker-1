import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import * as Progress from 'react-native-progress';
import { COLORS } from '../../constants/Theme';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ProgressScreen.style';
import HabitFilterDropdown from '../../components/buttons/filter/HabitFilterDropdown';
import FilteredHabitList from '../../components/filteredHabits/FilteredHabitList';

const ProgressScreen = () => {
  const habits = useHabitStore(state => state.habits);
  const completed = useHabitStore(state => state.completed);
  const filter = useHabitStore(state => state.filter);
  const showFilter = useHabitStore(state => state.showFilter);

  const today = moment().format('YYYY-MM-DD');
  const completedToday = completed[today] || [];

  const habitsToday = habits.filter(habit => {
    if (habit.frequency === 'daily') return true;
    if (habit.frequency === 'weekly') {
      const todayDay = moment(today).format('ddd');
      return habit.days.includes(todayDay);
    }
    return false;
  });

  let percentCompleted = 0;

  if (habitsToday.length > 0) {
    percentCompleted = Math.round(
      (completedToday.length / habitsToday.length) * 100
    );
  }

  let progressEmoji = '';
  let progressMessage = '';

  switch (true) {
    case percentCompleted === 100:
      progressEmoji = '🎉';
      progressMessage = 'Amazing! You completed all your habits!';
      break;
    case percentCompleted >= 75:
      progressEmoji = '💪';
      progressMessage = 'Great job! Almost there!';
      break;
    case percentCompleted >= 50:
      progressEmoji = '🔥';
      progressMessage = 'Nice! You’re building momentum!';
      break;
    case percentCompleted >= 25:
      progressEmoji = '🌱';
      progressMessage = 'Getting there – Growing progress!';
      break;
    default:
      progressEmoji = '🚀';
      progressMessage = 'Just getting started – Let’s go!';
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
          <Text style={styles.title}>Today's Progress</Text>
          <View style={styles.card}>
            <View style={styles.progressBar}>
                <Progress.Bar
                progress={percentCompleted / 100}
                width={250}
                height={20}
                color={COLORS.primaryBtn || '#4CAF50'}
                unfilledColor="#e0e0e0"
                borderRadius={10}
                borderWidth={0}
                />
            </View>
            <Text style={styles.emoji}>{progressEmoji}</Text>
            <Text style={styles.message}>{progressMessage}</Text>
            <Text style={styles.text}>
              {completedToday.length} / {habitsToday.length} habits completed
            </Text>
            <Text style={styles.textPercentage}>Progress: {percentCompleted}%</Text>
          </View>
        </View>
      </>  
    }

    </LinearGradient>
    </SafeAreaView>
  );
};

export default ProgressScreen;

