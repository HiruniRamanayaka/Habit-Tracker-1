export type User = {
  name: string;
  email: string;
  password: string;
};

export type Habit = {
  name: string;
  frequency: 'daily' | 'weekly';
  days: string[]; // only for weekly habits
};
