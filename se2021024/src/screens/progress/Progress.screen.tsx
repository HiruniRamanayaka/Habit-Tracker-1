import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import * as Progress from 'react-native-progress';
import { COLORS } from '../../constants/Theme';
import LinearGradient from 'react-native-linear-gradient';

const ProgressScreen = () => {
  const habits = useHabitStore(state => state.habits);
  const completed = useHabitStore(state => state.completed);

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
    </LinearGradient>
    </SafeAreaView>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 5,
 },
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '90%',
    alignItems: 'center',
  },
  progressBar: {
    marginTop: 30,
  },
  emoji: {
    fontSize: 60,
    marginVertical: 20,
  },
  message: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  textPercentage: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
    marginBottom: 15,
  },
});
