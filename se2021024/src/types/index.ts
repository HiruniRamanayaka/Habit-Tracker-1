export type User = {
  name: string;
  email: string;
  password: string;
};

export type Habit = {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly';
  days: string[]; // only for weekly habits
  createdAt: string;
};
