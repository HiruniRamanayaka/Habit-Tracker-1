import React, { useContext, useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { UserContext } from '../../common/context/userContext';
import LogoutButton from '../../components/buttons/logout/LogoutButton';
import DeleteUserButton from '../../components/buttons/delete/DeleteUserButton';
import styles from './HomeScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import CreateNewHabitButton from '../../components/buttons/createNewHabit/CreateNewHabitButton';
import { ScrollView } from 'react-native-gesture-handler';
import HabitList from '../../components/habitList/HabitList';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import FilteredHabitList from '../../components/filteredHabits/FilteredHabitList';
import CustomHeader from '../../components/customHeader/CustomHeader';
import HabitFilterDropdown from '../../components/buttons/filter/HabitFilterDropdown';

const HomeScreen = ({ navigation }: any) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const filter = useHabitStore(state => state.filter);
  const showFilter = useHabitStore(state => state.showFilter);

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient colors={['#f2f2f2', '#b0a0bd']} style={styles.gradientBackground}>

        {/*show filter dropdown and filtered habits */}
        {showFilter && (
          <View style={{ flex: 1, padding: 16 }}>
            <HabitFilterDropdown />
            <View style={{ flex: 1 }}>
              <FilteredHabitList />
            </View>
          </View>
        )}

        {/* Default habit list (only if filter is "none" and dropdown is hidden) */}
        {!showFilter && filter === 'none' && 
          <>
            <HabitList />
            <CreateNewHabitButton />
          </>  
        }

      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
