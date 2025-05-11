import { createContext } from 'react';

export type UserType = {
  userName: string;
  email: string;
  password: string;
} | null;

export const UserContext = createContext<{
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}>({
  user: null,
  setUser: () => {},
});
