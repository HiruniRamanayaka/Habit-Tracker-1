import React, {useState, useEffect}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/splashScreen/Splash.screen';
import AppNavigation from './src/navigation/AppNavigation';
import { UserContext, UserType } from './src/common/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [user, setUser] = useState<UserType>(null);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

   // This will be called when the splash screen has finished loading
  const handleSplashReady = async () => {
      try{
        // Read user info and logged-in status from AsyncStorage
        const storedUser = await AsyncStorage.getItem('user');
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

        // If user is logged in, go to Home
        if(storedUser && isLoggedIn === 'true') {
          const loggedUser = JSON.parse(storedUser);
          setUser({ 
            userName: loggedUser.userName, 
            email: loggedUser.email, 
            password: loggedUser.password 
          });
          setInitialRoute('Home');
        }else if(storedUser) {
          // If user exists but isn't logged in, go to Login page
          setInitialRoute('LogIn');
        }else{
          // If no user found, navigate to the SignUp screen
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
