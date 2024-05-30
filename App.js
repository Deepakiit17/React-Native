import React, {useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';

function App() {
  const saveAPIData = async () => {
    const data = {
      name: 'Killer',
      age: 36,
      email: 'killer@test.com',
    };
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text style={{fontSize: 40}}>POST API Call</Text>
      <Button title="Save Data" onPress={saveAPIData} />
    </View>
  );
}

export default App;
