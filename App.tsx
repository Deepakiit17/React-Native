import React from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  let data = 100;
  const fruit = val => {
    data = 20;
    console.warn(data);
  };
  return (
    <View>
      <Text style={{fontSize: 40}}>{data}</Text>
      <Button
        title="Press Here"
        onPress={() => fruit('Hello Anil')}
        color={'red'}
      />
      <Button title="Press Here 2" onPress={fruit} color={'green'} />
    </View>
  );
}

export default App;
