import React, { useContext } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { UserContext } from '../../common/context/userContext';
import LogoutButton from '../../components/buttons/logout/LogoutButton';
import DeleteUserButton from '../../components/buttons/delete/DeleteUserButton';
import styles from './HomeScreen.style';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }: any) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient 
        colors={['#ffffff', '#4B0082']} 
        style={styles.gradientBackground}
      >
        <View>
          <Text style={styles.main}>Welcome, {user?.userName}</Text>
          <LogoutButton navigation={navigation}/>
          <DeleteUserButton navigation={navigation}/>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
