import React, {useState, useEffect}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/splashScreen/Splash.screen';
import AppNavigation from './src/navigation/AppNavigation';
import { UserContext, UserType } from './src/common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [user, setUser] = useState<UserType>(null);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  const handleSplashReady = async () => {
      try{
        const storedUser = await AsyncStorage.getItem('user');
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

        if(storedUser && isLoggedIn === 'true') {
          const loggedUser = JSON.parse(storedUser);
          setUser({ 
            userName: loggedUser.userName, 
            email: loggedUser.email, 
            password: loggedUser.password 
          });
          setInitialRoute('Home');
        }else if(storedUser) {
          setInitialRoute('LogIn');
        }else{
          setInitialRoute('SignUp');
        }
      }catch(error){
        console.log('Error happens when reading data from AsyncStorage', error);
      };
    }

  useEffect(() => {
      handleSplashReady();
  }, []);

  // If still deciding the route, show splash screen
  if (!initialRoute) {
    return <SplashScreen onReady={handleSplashReady} />;
  }

  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <AppNavigation initialRoute={initialRoute}/>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
