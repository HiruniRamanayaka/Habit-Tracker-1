import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Habit} from '../../types/index';
// Removed incorrect import of get from TurboModuleRegistry

type HabitState = {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  deleteHabit: (index: number) => void;
  clearHabits: () => void;
  completed: { [date: string]: string[] }; // date => array of completed habit IDs
  toggleCompleted: (habitId: string, date: string) => void;
};

export const useHabitStore = create<HabitState>()(
  persist(
    (set) => ({
      habits: [],
      completed: {},

      // adding a habit
      addHabit: (habit) =>
        set((state) => ({
          habits: [...state.habits, habit],
        })),

      // deleting a habit
      deleteHabit: (index) =>
        set((state) => ({
          habits: state.habits.filter((_, i) => i !== index),
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
        
      // clearing all habits
      clearHabits: () => set({ habits: [] }),
    }),
    {
      name: 'habit-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);


// npm install @react-native-picker/picker
// npm install zustand