import React, { useContext, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import EditHabitModal from '../../editHabitModal/EditHabitModal';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../../common/context/ThemeContext';
import styles from './EditHabitButton.style';

type EditHabitButtonProps = {
  habit: {
    id: string;
    name: string;
    frequency: 'daily' | 'weekly';
    days?: string[];
    createdAt: string;
  };
};

const EditHabitButton = ({ habit }: EditHabitButtonProps) => {
  const { theme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[styles.button, { backgroundColor: theme.closeButtonBg }]}
      >
        <Icon name="pencil" size={22} color={theme.icon} />
      </TouchableOpacity>

      <EditHabitModal
        visible={modalVisible}
        onClose={handleClose}
        habit={{
          id: habit.id,
          name: habit.name,
          frequency: habit.frequency,
          days: habit.days,
          createdAt: habit.createdAt, 
          }}
        />
    </>
  );
};

export default EditHabitButton;
