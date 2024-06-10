import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductWrapper from './Components/ProductWrapper';
import UserList from './Components/UserList';

const Stack = createNativeStackNavigator;
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper} />
        <Stack.Screen name="User" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
