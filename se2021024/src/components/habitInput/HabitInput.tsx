import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Alert, Button, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView, Text } from 'react-native-gesture-handler';
import styles from './HabitInput.style';
import { useHabitStore } from '../../store/tasks/useHabitStore';

const days_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const HabitInput = ({ onClose }: { onClose: () => void }) => {
    const addHabit = useHabitStore(state => state.addHabit);

    const [habitName, setHabitName] = useState('');
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(prev => prev.filter(d => d !== day));
    } else {
      setSelectedDays(prev => [...prev, day]);
    }
  };

  const handleSubmit = async () => {
    const habitData = {
      name: habitName,
      frequency,
      days: frequency === 'weekly' ? selectedDays : [],
    };

    await addHabit(habitData);
    Alert.alert('Habit added!');
    setHabitName('');
    setFrequency('daily');
    setSelectedDays([]);
    onClose();  
  };

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.label}>Habit Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter habit name"
          value={habitName}
          onChangeText={setHabitName}
        />
        <Text style={styles.label}>Frequency</Text>
        <View style={styles.pickerContainer}>
            <Picker
              selectedValue={frequency}
              onValueChange={(itemValue) => setFrequency(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Daily" value="daily" />
              <Picker.Item label="Weekly" value="weekly" />
            </Picker>
        </View>

        {frequency === 'weekly' && (
            <>
            <Text style={styles.label}>Select Days</Text>
            <View style={styles.daysContainer}>
                {days_of_week.map((day) => (
                    <TouchableOpacity
                      key={day}
                      style={[
                        styles.dayButton, 
                        selectedDays.includes(day) && styles.dayButtonSelected]}
                      onPress={() => toggleDay(day)}
                    >
                      <Text style={styles.dayText}>{day}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            </>
        )}
        <TouchableOpacity
            style={styles.addButton}
            onPress={handleSubmit}
        >
            <Text style={styles.addButtonText}>Add Habit</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default HabitInput;