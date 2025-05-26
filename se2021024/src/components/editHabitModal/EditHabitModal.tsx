import React, { useState, useContext, useEffect } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ThemeContext } from '../../common/context/ThemeContext';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import getStyles from './EditHabitModel.style';

const days_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

type EditHabitModalProps = {
  habit: {
    id: string;
    name: string;
    frequency: 'daily' | 'weekly';
    days?: string[];
    createdAt: string;
  };
  visible: boolean;
  onClose: () => void;
};

const EditHabitModal = ({ habit, visible, onClose }: EditHabitModalProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);
  const updateHabit = useHabitStore(state => state.updateHabit);

  const [name, setName] = useState(habit.name);
  const [frequency, setFrequency] = useState(habit.frequency);
  const [days, setDays] = useState(habit.days || []);

  useEffect(() => {
    setName(habit.name);
    setFrequency(habit.frequency);
    setDays(habit.days || []);
  }, [habit]);

  const toggleDay = (day: string) => {
    setDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    const updatedHabit = {
      ...habit, // keeps id and createdAt
      name,
      frequency,
      days: frequency === 'weekly' ? days : [],
    };
    updateHabit(updatedHabit);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
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
            value={name}
            onChangeText={setName}
            placeholder="Habit name"
            placeholderTextColor={theme.placeholder}
          />

         <Text style={[styles.label, { color: theme.text }]}>Frequency</Text>
         <View style={[
            styles.pickerContainer,
            { backgroundColor: theme.inputBackground, borderColor: theme.border },
            ]}>
          <Picker
            selectedValue={frequency}
            onValueChange={(value) => setFrequency(value)}
            style={[styles.picker, { color: theme.text }]}
          >
            <Picker.Item label="Daily" value="daily" />
            <Picker.Item label="Weekly" value="weekly" />
          </Picker>
         </View>

          {frequency === 'weekly' && (
            <View style={styles.daysContainer}>
              {days_of_week.map((day) => (
                <TouchableOpacity
                  key={day}
                  onPress={() => toggleDay(day)}
                  style={[
                    styles.dayButton,
                    days.includes(day) && styles.dayButtonSelected,
                  ]}
                >
                  <Text style={styles.dayText}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditHabitModal;
