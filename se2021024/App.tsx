import React, {useState}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { UserContext, UserType } from './src/common/context/userContext';

const App = () => {
  const [user, setUser] = useState<UserType>(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
