import React, { useContext } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { UserContext } from '../../common/context/userContext';
import LogoutButton from '../../components/buttons/logout/LogoutButton';
import DeleteUserButton from '../../components/buttons/delete/DeleteUserButton';
import styles from './HomeScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import CreateNewHabitButton from '../../components/buttons/createNewHabit/CreateNewHabitButton';
import { ScrollView } from 'react-native-gesture-handler';
import HabitList from '../../components/habitList/HabitList';

const HomeScreen = ({ navigation }: any) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient 
        colors={['#f2f2f2', '#b0a0bd']} 
        style={styles.gradientBackground}
      >
        
        
          <HabitList />
        
        <CreateNewHabitButton />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
