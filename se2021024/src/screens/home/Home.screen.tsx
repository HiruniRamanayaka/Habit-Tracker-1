import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import { UserContext } from '../../common/context/userContext';
import styles from './HomeScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import CreateNewHabitButton from '../../components/buttons/createNewHabit/CreateNewHabitButton';
import HabitList from '../../components/habitList/HabitList';
import { useHabitStore } from '../../store/tasks/useHabitStore';
import FilteredHabitList from '../../components/filteredHabits/FilteredHabitList';
import HabitFilterDropdown from '../../components/buttons/filter/HabitFilterDropdown';
import { ThemeContext } from '../../common/context/ThemeContext';

const HomeScreen = ({ navigation }: any) => {
  const { theme } = useContext(ThemeContext);

  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const filter = useHabitStore(state => state.filter);
  const showFilter = useHabitStore(state => state.showFilter);

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
      colors={theme.mode === 'dark' ? ['#000', '#000'] : ['#f2f2f2', '#b0a0bd']}
      style={styles.gradientBackground}
    >

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
