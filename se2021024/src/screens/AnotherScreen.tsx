import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import LogoutButton from '../components/buttons/logout/LogoutButton';
import DeleteUserButton from '../components/buttons/delete/DeleteUserButton';
import { UserContext } from '../common/context/userContext';

const AnotherScreen = ({ navigation }: any) => {
    const { user, setUser } = useContext(UserContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Another Screen</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
        <View>
          <Text >Welcome, {user?.userName}</Text>
          <LogoutButton navigation={navigation}/>
          <DeleteUserButton navigation={navigation}/>
        </View>
    </View>
  );
};

export default AnotherScreen;
