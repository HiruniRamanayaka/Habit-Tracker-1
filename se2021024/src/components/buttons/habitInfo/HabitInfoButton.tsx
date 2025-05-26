import React, { useContext, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import EditHabitModal from '../../editHabitModal/EditHabitModal';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../../common/context/ThemeContext';
import styles from './HabitInfoButton.style';
import HabitInfoModal from '../../habitInfoModel/HabitInfoModel';

type HabitInfoButtonProps = {
  habit: {
    id: string;
    name: string;
    frequency: 'daily' | 'weekly';
    days?: string[];
    createdAt: string;
  };
};

const HabitInfoButton = ({ habit }: HabitInfoButtonProps) => {
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
        <Icon name="document-text" size={22} color={theme.icon} />
      </TouchableOpacity>

      <HabitInfoModal
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

export default HabitInfoButton;
