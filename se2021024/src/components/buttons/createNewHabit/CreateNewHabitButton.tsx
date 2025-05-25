import React, { useState } from 'react';
import { Button, Modal, Text, TouchableOpacity, View} from 'react-native';
import HabitInput from '../../habitInput/HabitInput';
import styles from './CreateNewHabitButtton.style';

const CreateNewHabitButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };
  
  return (
    <>
    <TouchableOpacity 
        onPress={() => setModalVisible(true)} 
        style={styles.fab}
    >
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>

    <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={closeModal}
            >
                <Text>X</Text>
            </TouchableOpacity>
            <HabitInput onClose={closeModal} />
          </View>
        </View>
    </Modal>
    </>
  );
};

export default CreateNewHabitButton;