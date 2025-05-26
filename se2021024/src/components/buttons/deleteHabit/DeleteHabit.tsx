import React, {useContext, useState} from 'react';
import { TouchableOpacity,Text,Modal,View,} from 'react-native';
import { useHabitStore } from '../../../store/tasks/useHabitStore';
import styles from './DeleteHabitButton.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../../common/context/ThemeContext';

/* Function of delete button */
const DeleteHabit = ({ habitId }: { habitId: string }) => {
  const { theme } = useContext(ThemeContext);
  const deleteHabit = useHabitStore(state => state.deleteHabit);
  const [modalVisible, setModalVisible] = useState(false);

  const confirmDelete = () => {
    deleteHabit(habitId);
    setModalVisible(false);
  };

  return (
    <>
      {/* delete button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.error }]}
        onPress={() => setModalVisible(true)}>
        <Icon name="trash" size={22} color={theme.buttonText} />
      </TouchableOpacity>

      {/* Confirmation dialog box for deleting a task */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={[styles.modalBackground, { backgroundColor: theme.modalOverlay }]}>
          <View style={[styles.modalContainer, { backgroundColor: theme.card }]}>
            <Text style={[styles.modalTitle, { color: theme.text }]}>Delete This Habit?</Text>
            <Text style={{ color: theme.textSecondary, textAlign: 'center', marginBottom: 20 }}>
              This action cannot be undone.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.deleteButton, { backgroundColor: theme.error }]}
                onPress={confirmDelete}>
                <Text style={[styles.buttonText, { color: theme.buttonText }]}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.cancelButton, { backgroundColor: theme.button }]}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.buttonText, { color: theme.text }]}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DeleteHabit;

