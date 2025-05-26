import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react';
import { Alert, Button, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView, Text } from 'react-native-gesture-handler';
import styles from './HabitInput.style';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import HabitFilterDropdown from '../buttons/filter/HabitFilterDropdown';
import FilteredHabitList from '../filteredHabits/FilteredHabitList';
import { ThemeContext } from '../../common/context/ThemeContext';
import MessageModal from '../messageModal/MessageModal';

const days_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const HabitInput = ({ onClose }: { onClose: () => void }) => {
    const { theme } = useContext(ThemeContext);
    const addHabit = useHabitStore(state => state.addHabit);
    const todayDate = moment().format('YYYY-MM-DD');

    const [habitName, setHabitName] = useState('');
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    //Modal state
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(prev => prev.filter(d => d !== day));
    } else {
      setSelectedDays(prev => [...prev, day]);
    }
  };

  const showModal = (message: string) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const handleSubmit = async () => {
    if (!habitName) { 
      showModal('Please enter a habit name');
      return;
    }
    if (frequency === 'weekly' && selectedDays.length === 0) {
      showModal('Please select at least one day for weekly habits');
      return;
    }

    const habitData = {
      id: Date.now().toString(),            // unique ID for the habit
      name: habitName,
      frequency,
      days: frequency === 'weekly' ? selectedDays : [],
      createdAt: moment().format('YYYY-MM-DD'),
    };

    await addHabit(habitData);
    showModal('Habit added!');
    setHabitName('');
    setFrequency('daily');
    setSelectedDays([]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.label, { color: theme.text }]}>Habit Name</Text>
        <TextInput
          style={[
          styles.input,
          {
            backgroundColor: theme.inputBackground,
            borderColor: theme.border,
            color: theme.text,
          },
        ]}
          placeholder="Enter habit name"
          placeholderTextColor={theme.placeholder}
          value={habitName}
          onChangeText={setHabitName}
        />
        <Text style={[styles.label, { color: theme.text }]}>Frequency</Text>
        <View style={[
          styles.pickerContainer,
          { backgroundColor: theme.inputBackground, borderColor: theme.border },
        ]}>
          <Picker
            selectedValue={frequency}
            onValueChange={(itemValue) => setFrequency(itemValue)}
            style={[styles.picker, { color: theme.text }]}
            dropdownIconColor={theme.fab}
            >
              <Picker.Item label="Daily" value="daily" />
              <Picker.Item label="Weekly" value="weekly" />
            </Picker>
          </View>

          {frequency === 'weekly' && (
            <>
              <Text style={[styles.label, { color: theme.text }]}>Select Days</Text>
              <View style={styles.daysContainer}>
                {days_of_week.map((day) => (
                  <TouchableOpacity
                    key={day}
                    style={[
                      styles.dayButton, 
                      selectedDays.includes(day) && styles.dayButtonSelected
                    ]}
                      onPress={() => toggleDay(day)}
                  >
                   <Text style={styles.dayText}>{day}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
            
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: theme.fab }]}
            onPress={handleSubmit}
          >
            <Text style={[styles.addButtonText, { color: theme.text }]}>Add Habit</Text>
          </TouchableOpacity>

      {/* Modal for messages */}
      <MessageModal
        visible={modalVisible}
        message={modalMessage}
        onClose={() => {
          setModalVisible(false);
          if (modalMessage === 'Habit added!') {
            onClose(); // Close the input modal if habit is added successfully
          }
        }}
        theme={{
          background: theme.background,
          text: theme.text,
          modalBackground: theme.inputBackground,
          buttonBackground: theme.fab,
          buttonText: theme.text,
        }}
      />
    </SafeAreaView>
  );
};

export default HabitInput;