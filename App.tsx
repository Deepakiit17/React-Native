import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const [name, setName] = useState('anil');
  let data = 'Sam';
  const fruit = () => {
    setName('Sidhu');
    data = 'peter';
  };
  return (
    <View>
      <Text style={{fontSize: 40}}>{name}</Text>
      <Text style={{fontSize: 40}}>{data}</Text>
      <Button title="Update Name" onPress={fruit} color={'red'} />
    </View>
  );
}

export default App;
