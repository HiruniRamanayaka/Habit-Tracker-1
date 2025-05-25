import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { UserContext } from '../../common/context/userContext';
import moment from 'moment';
import LogoutButton from '../buttons/logout/LogoutButton';
import styles from './CustomDrawer.style';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { user, setUser } = useContext(UserContext);

  const currentDate = moment().format('dddd, D MMMM YYYY'); 

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require('../../assests/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.welcome}>Welcome, {user?.userName || 'User'}!</Text>
      </View>

      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.footer}>
        <LogoutButton />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

