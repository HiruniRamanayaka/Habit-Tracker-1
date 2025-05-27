import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Habit} from '../../types/index';

type FilterType = 'none' | 'all' | 'today' | 'completed';

type HabitState = {
  habits: Habit[];
  completed: { [date: string]: string[] }; // date => array of completed habit IDs
  filter: FilterType;
  showFilter: boolean;

  addHabit: (habit: Habit) => void;
  deleteHabit: (id: string) => void;
  clearHabits: () => void;
  updateHabit: (updatedHabit: Habit) => void;
  toggleCompleted: (habitId: string, date: string) => void;
  setFilter: (filter: FilterType) => void;
  toggleShowFilter: () => void;
};

export const useHabitStore = create<HabitState>()(
  persist(
    (set, get) => ({
      habits: [],
      completed: {},
      filter: 'none',
      showFilter: false, 

      // adding a habit
      addHabit: (habit) =>
        set((state) => ({
          habits: [...state.habits, habit],
        })),

      // deleting a habit
      deleteHabit: (id: string) =>
        set((state) => ({
          habits: state.habits.filter(habit => habit.id !== id),
        })),
      
      // updating a habit
      updateHabit: (updatedHabit: Habit) =>
        set((state) => ({
          habits: state.habits.map((habit) =>
            habit.id === updatedHabit.id ? updatedHabit : habit
          ),
        })),
      
      // toggling the completion status of a habit
      toggleCompleted: (habitId, date) => {
        set((state) => {
          const completedForDate = state.completed[date] || [];
          if (completedForDate.includes(habitId)) {
            // Remove habitId from completed array for date
            return {
              completed: {
                ...state.completed,
                [date]: completedForDate.filter(id => id !== habitId),
              },
            };
          } else {
            // Add habitId to completed array for date
            return {
              completed: {
                ...state.completed,
                [date]: [...completedForDate, habitId],
              },
            };
          }
        });
      },
      
      setFilter: (newFilter) => {
        //update the current filter value
        set({ filter: newFilter });
      },

      toggleShowFilter: () => {
        // Get the current value of showFilter
        const isFilterVisible = get().showFilter;

        // If it's currently shown, hide it and reset the filter to 'none'
        // If it's hidden, show it and keep the current filter value
        set({
          showFilter: !isFilterVisible,
          filter: isFilterVisible ? 'none' : get().filter,
        });
      },

        
      // clearing all habits
      clearHabits: () => set({ habits: [] }),
    }),
    {
      name: 'habit-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

