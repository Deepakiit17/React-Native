import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  );
};

const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Lock Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default App;
