import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000099', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
