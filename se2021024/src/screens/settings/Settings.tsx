import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DeleteUserButton from '../../components/buttons/deleteUser/DeleteUserButton';
import { ThemeContext } from '../../common/context/ThemeContext';
import styles from './Settings.style';

const AnotherScreen = ({ navigation }: any) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.text }]}>Account Settings</Text>
        <Text style={[styles.description, { color: theme.textSecondary }]}>
          If you wish to permanently delete your account, you can do so below.
        </Text>
          <DeleteUserButton navigation={navigation}/>
    </View>
  );
};

export default AnotherScreen;

