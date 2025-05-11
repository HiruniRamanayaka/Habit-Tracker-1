import { createContext } from 'react';

//  Defines the structure of the user object.
//  The user can be either an object with user details or null.
export type UserType = {
  userName: string;
  email: string;
  password: string;
} | null;

// Creates a context for managing user authentication state.
// Provides the user object and a function to update it.
export const UserContext = createContext<{
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}>({
  user: null,
  setUser: () => {},
});
