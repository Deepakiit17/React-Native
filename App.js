import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const Stack = createNativeStackNavigator();
function App() {
  const btnAction = () => {
    console.warn('btn pressed');
  };
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
            headerTitle: () => <Button onPress={btnAction} title="Left" />,
            headerRight: () => <Header />,
            title: 'User Login',
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

const Header = () => {
  return <TextInput placeholder="name" />;
};

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
