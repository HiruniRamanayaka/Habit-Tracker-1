import React, { useState, useContext, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../common/context/ThemeContext';
import getStyles from './HabitInfoModel.style';

const days_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

type HabitInfoModalProps = {
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

const HabitInfoModal = ({ habit, visible, onClose }: HabitInfoModalProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  const [name, setName] = useState(habit.name);
  const [frequency, setFrequency] = useState(habit.frequency);
  const [days, setDays] = useState(habit.days || []);

  useEffect(() => {
    setName(habit.name);
    setFrequency(habit.frequency);
    setDays(habit.days || []);
  }, [habit]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
          <Text style={[styles.title, { color: theme.text }]}>Habit Details</Text>

          <Text style={[styles.label, { color: theme.text }]}>Name: <Text style={styles.value}>{name}</Text></Text>
          <Text style={[styles.label, { color: theme.text }]}>Frequency: <Text style={styles.value}>{frequency}</Text></Text>

          {frequency === 'weekly' && (
            <Text style={[styles.label, { color: theme.text }]}>
              Days: <Text style={styles.value}>{days.join(', ') || 'None'}</Text>
            </Text>
          )}

          <Text style={[styles.label, { color: theme.text }]}>
            Created At: <Text style={styles.value}>{new Date(habit.createdAt).toLocaleDateString()}</Text>
          </Text>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default HabitInfoModal;
