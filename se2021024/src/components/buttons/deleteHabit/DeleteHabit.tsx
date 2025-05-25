import React, {useState} from 'react';
import { TouchableOpacity,Text,Modal,View,} from 'react-native';
import { useHabitStore } from '../../../store/tasks/useHabitStore';
import styles from './DeleteHabitButton.style';
import Icon from 'react-native-vector-icons/Ionicons';

/* Function of delete button */
const DeleteHabit = ({ habitId }: { habitId: string }) => {
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
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Icon name="trash" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Confirmation dialog box for deleting a task */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Delete This Habit?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={confirmDelete}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DeleteHabit;

