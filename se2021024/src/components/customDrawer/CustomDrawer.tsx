import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { UserContext } from '../../common/context/userContext';
import moment from 'moment';
import LogoutButton from '../buttons/logout/LogoutButton';
import styles from './CustomDrawer.style';
import { ThemeContext } from '../../common/context/ThemeContext';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const currentDate = moment().format('dddd, D MMMM YYYY'); 

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: theme.background }}>
      <View style={styles.header}>
        <Image
          source={
            theme.mode === 'dark'
              ? require('../../assests/logo-white.png')
              : require('../../assests/logo.png')
          } 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.date, { color: theme.text }]}>{currentDate}</Text>
        <Text style={[styles.welcome, { color: theme.text }]}>Welcome, {user?.userName || 'User'}</Text>
      </View>

      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>

      <View style={localStyles.themeSwitchContainer}>
        <Text style={[localStyles.themeSwitchLabel, { color: theme.text }]}>
          Dark Mode
        </Text>
        <Switch
          value={theme.mode === 'dark'}
          onValueChange={toggleTheme}
          thumbColor={theme.mode === 'dark' ? '#f4f3f4' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          style={{ transform: [{ scale: 1.3 }] }} 
        />
      </View>

      <View style={styles.footer}>
        <LogoutButton navigation={props.navigation}/>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const localStyles = StyleSheet.create({
  toggleButton: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
  },
    themeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
},
  themeSwitchLabel: {
    fontSize: 18,
  },

});

