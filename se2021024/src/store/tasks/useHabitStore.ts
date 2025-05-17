import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Habit = {
  name: string;
  frequency: 'daily' | 'weekly';
  days: string[]; // only for weekly habits
};

type HabitState = {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
};

export const useHabitStore = create<HabitState>()(
  persist(
    (set) => ({
      habits: [],
      addHabit: (habit) =>
        set((state) => ({
          habits: [...state.habits, habit],
        })),
    }),
    {
      name: 'habit-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);


// npm install @react-native-picker/picker
// npm install zustand