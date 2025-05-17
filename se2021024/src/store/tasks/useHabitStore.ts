import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Habit} from '../../types/index';

type HabitState = {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  deleteHabit: (index: number) => void;
  clearHabits: () => void;
};

export const useHabitStore = create<HabitState>()(
  persist(
    (set) => ({
      habits: [],
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