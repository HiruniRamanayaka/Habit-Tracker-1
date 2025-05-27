import React, { useContext, useState } from 'react';
import { Modal, Text, TouchableOpacity, View} from 'react-native';
import HabitInput from '../../habitInput/HabitInput';
import styles from './CreateNewHabitButtton.style';
import { ThemeContext } from '../../../common/context/ThemeContext';

const CreateNewHabitButton = () => {
  const { theme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };
  
  return (
    <>
    <TouchableOpacity 
        onPress={() => setModalVisible(true)} 
        style={[styles.fab, { backgroundColor: theme.fab }]}
    >
      <Text style={[styles.fabText, { color: theme.text }]}>+</Text>
    </TouchableOpacity>

    <Modal visible={modalVisible} transparent animationType="slide">
        <View style={[styles.modalBackdrop, { backgroundColor: theme.modalOverlay }]}>
          <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
            <TouchableOpacity
                style={[styles.closeButton, { backgroundColor: theme.closeButtonBg }]}
                onPress={closeModal}
            >
                <Text style={{ color: theme.closeButtonText }}>X</Text>
            </TouchableOpacity>
            <HabitInput onClose={closeModal} />
          </View>
        </View>
    </Modal>
    </>
  );
};

export default CreateNewHabitButton;