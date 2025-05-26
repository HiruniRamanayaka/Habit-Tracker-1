import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react';
import { Alert, Button, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView, Text } from 'react-native-gesture-handler';
import styles from './AddHabitScree.style';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import moment from 'moment';
import HabitFilterDropdown from '../../components/buttons/filter/HabitFilterDropdown';
import FilteredHabitList from '../../components/filteredHabits/FilteredHabitList';
import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from '../../common/context/ThemeContext';
import MessageModal from '../../components/messageModal/MessageModal';

const days_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const AddHabitScreen = ({ onClose }: { onClose?: () => void }) => {
    const { theme } = useContext(ThemeContext);
    const addHabit = useHabitStore(state => state.addHabit);
     const todayDate = moment().format('YYYY-MM-DD');

    const [habitName, setHabitName] = useState('');
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const filter = useHabitStore(state => state.filter);
    const showFilter = useHabitStore(state => state.showFilter);

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
    <SafeAreaView style={styles.container}>
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
         <View style={[styles.container]}>
          <Text style={[styles.heading, { color: theme.text }]}>Add New Habits</Text>
          <View style={[styles.form, { backgroundColor: theme.card }]}>
            <Text style={[styles.label, { color: theme.label }]}>Habit Name</Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.inputBackground,
                  color: theme.text,
                  borderColor: theme.border,
                },
              ]}
              placeholder="Enter habit name"
              placeholderTextColor={theme.placeholder}
              value={habitName}
              onChangeText={setHabitName}
            />
            <Text style={[styles.label, { color: theme.label }]}>Frequency</Text>
            <View style={[styles.pickerContainer, { backgroundColor: theme.inputBackground, borderColor: theme.border }]}>
                <Picker
                  selectedValue={frequency}
                  onValueChange={(itemValue) => setFrequency(itemValue)}
                  style={[styles.picker, { color: theme.text }]}
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
                              {
                                backgroundColor: theme.card,
                                borderColor: theme.border,
                              },
                            selectedDays.includes(day) && styles.dayButtonSelected]}
                          onPress={() => toggleDay(day)}
                        >
                          <Text style={[styles.dayText, { color: theme.text }]}>{day}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                </>
            )}
            <TouchableOpacity
                style={[styles.addButton, { backgroundColor: theme.primary }]}
                onPress={handleSubmit}
            >
                <Text style={[styles.addButtonText, { color: theme.buttonText }]}>Add Habit</Text>
            </TouchableOpacity>
          </View>  
          </View>
          
        }
        {/* Modal for messages */}
      <MessageModal
        visible={modalVisible}
        message={modalMessage}
        onClose={() => {
          setModalVisible(false);
          if (modalMessage === 'Habit added!') {
            if (onClose) {
              onClose(); // Close the input modal if habit is added successfully
            }
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
    </LinearGradient>
    </SafeAreaView>
  );
};

export default AddHabitScreen;