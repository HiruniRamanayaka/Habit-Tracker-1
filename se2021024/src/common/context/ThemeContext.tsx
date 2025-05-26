// common/context/ThemeContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export type Theme = {
  mode: 'light' | 'dark';
  background: string;
  text: string;
  icon: string;
  card: string;
  button: string;
  modalBackground: string;
  tabBar: string;
  accent: string;
  checkbox: string;
  checkboxChecked: string;
  border: string;
  inputBackground: string;
  placeholder: string;
  primary: string;
  buttonText: string;
  label: string;
  textSecondary: string;
  shadow: string;
  unfilledBar: string;
  selectedText: string;
  disabled: string;
  success: string;
  error: string;
  fab: string;
  modalOverlay: string;
  closeButtonBg: string;
  closeButtonText: string;
};

const lightTheme: Theme = {
  mode: 'light',
  background: '#FFFFFF',
  text: '#000000',
  icon: '#000000',
  card: '#F2F2F2',
  button: '#E0E0E0',
  modalBackground: 'rgba(0,0,0,0.3)',
  tabBar: '#ffffff',
  accent: '#4CAF50',
  checkbox: '#e0e0e0',
  checkboxChecked: '#4CAF50',
  border: '#cccccc',
  inputBackground: '#ffffff',
  placeholder: '#999999',
  //checkboxChecked: '#8e44ad',
  primary: '#8e44ad',
  buttonText: '#ffffff',
  label: '#000000',
  textSecondary: '#555555',
  shadow: '#000000',
  unfilledBar: '#e0e0e0',
  // unfilledBar: '#cccccc',
  selectedText: '#ffffff',
  disabled: '#aaaaaa',
  success: '#4CAF50',   // Green
  error: '#F44336',     // Red
  fab: '#4f2586',
  modalOverlay: 'rgba(0,0,0,0.4)',
  closeButtonBg: '#eee',
  closeButtonText: '#333',
};

const darkTheme: Theme = {
  mode: 'dark',
  background: '#121212',
  text: '#FFFFFF',
  icon: '#FFFFFF',
  card: '#1E1E1E',
  button: '#333333',
  modalBackground: 'rgba(81, 80, 80, 0.1)',
  tabBar: '#1a1a1a',
  accent: '#81c784',
  checkbox: '#000000',
  //checkboxChecked: '#81c784',
  border: '#444444',
  inputBackground: '#2c2c2c',
  placeholder: '#aaaaaa',
  checkboxChecked: '#bb86fc',
  primary: '#bb86fc',
  buttonText: '#000000',
  label: '#ffffff',
  textSecondary: '#cccccc',
  shadow: '#000000',
  unfilledBar: '#444444',
  // unfilledBar: '#444444',
  selectedText: '#000000',
  disabled: '#888888',
  success: '#81C784',   // Light green
  error: '#EF5350',     // Light red
  fab: '#4f2586',
  // text: '#ffffff',
  // background: '#121212',
  modalOverlay: 'rgba(255,255,255,0.1)',
  closeButtonBg: '#333',
  closeButtonText: '#fff',
};

type ThemeContextType = {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const isDarkMode = theme.mode === 'dark';

  const toggleTheme = () => {
    setTheme((prev) => (prev.mode === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
