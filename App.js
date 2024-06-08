import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const [user, setUser] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem('user', 'Anil Sidhu');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    setUser(name);
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('user');
    setUser('');
  };

  return (
    <View style={{marginTop: 100, marginLeft: 30}}>
      <Text style={{fontSize: 40}}>
        AsyncStorage with React Native | {user}
      </Text>
      <Button title="Set Data" onPress={setData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
    </View>
  );
}

export default App;
