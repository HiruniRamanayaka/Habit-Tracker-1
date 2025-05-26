import { StyleSheet } from 'react-native';

const getStyles= (theme: any) => StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: theme.modalOverlay,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '85%',
      padding: 20,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    value: {
      fontWeight: 'bold',
    },
    closeButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: theme.fab,
      borderRadius: 5,
      alignItems: 'center',
    },
    closeText: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default getStyles;