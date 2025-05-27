import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './MessageModal.style';

type SimpleModalProps = {
  visible: boolean;
  message: string;
  onClose: () => void;
  theme: {
    background: string;
    text: string;
    modalBackground: string;
    buttonBackground: string;
    buttonText: string;
  };
};

const MessageModal = ({ visible, message, onClose, theme }: SimpleModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={[styles.overlay]}>
        <View style={[styles.modalBox, { backgroundColor: theme.modalBackground }]}>
          <Text style={[styles.messageText, { color: theme.text }]}>{message}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.buttonBackground }]}
            onPress={onClose}
          >
            <Text style={[styles.buttonText, { color: theme.buttonText }]}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default MessageModal;

