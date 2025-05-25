import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './WeeklyProgressScreen.style'

const WeeklyProgressScreen = () => {
  const habits = useHabitStore(state => state.habits);
  const completed = useHabitStore(state => state.completed);
  
  // Get dates for this week (Mon–Sun)
  const getWeekDates = () => {
    const today = new Date();
    const currentDay = today.getDay(); // 0 (Sun) to 6 (Sat)

    // Find how many days to subtract to get Monday
    let daysToMonday;
    if (currentDay === 0) {
        daysToMonday = 6; 
    } else {
        daysToMonday = currentDay - 1; 
    }

    const week = [];

    // Get Monday
    const monday = new Date(today);
    monday.setDate(today.getDate() - daysToMonday);

    // Push 7 days (Mon to Sun)
    for (let i = 0; i < 7; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        week.push(date);
    }

    return week;
  };

  const weekDates = getWeekDates();

  // convert data in to a barchart
  const weeklyStat = weekDates.map(date => {
    const dateKey = moment(date).format('YYYY-MM-DD');
    const completedToday = completed[dateKey] || [];

    const habitsToday = habits.filter(habit => {
        if (habit.frequency === 'daily') return true;
        if (habit.frequency === 'weekly') {
        const weekday = moment(date).format('ddd');
        return habit.days.includes(weekday);
        }
        return false;
    });   

    const total = habitsToday.length;
    const completedCount = completedToday.length;
    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

    return {
        label: moment(date).format('ddd'),
        percent,
        completedCount,
        total,
        fullDate: moment(date).format('dddd'),
    };
  });

  const chartData = {
    labels: weeklyStat.map(stat => stat.label),
    datasets: [
      {
        data: weeklyStat.map(stat => stat.percent),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.screen}>
    <LinearGradient colors={['#f2f2f2', '#b0a0bd']} style={styles.gradientBackground}></LinearGradient>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weekly Progress</Text>

      <BarChart
        data={chartData}
        width={Dimensions.get('window').width - 40}
        height={220}
        fromZero
        showValuesOnTopOfBars
        yAxisSuffix="%"
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`,
          labelColor: () => '#333',
          barPercentage: 0.5,
        }}
        style={{
          marginVertical: 16,
          borderRadius: 8,
          alignSelf: 'center',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      />
       
      {/* Optional: keep detailed text below the chart */}
      {weeklyStat.map(stat => (
        <View key={stat.fullDate} style={styles.dayBox}>
          <Text style={styles.dayText}>{stat.fullDate}</Text>
          <Text style={styles.progressText}>
            {stat.completedCount} / {stat.total} completed ({stat.percent}%)
          </Text>
        </View>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
};

export default WeeklyProgressScreen;

