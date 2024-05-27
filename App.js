import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn('Hello');
  }, []);

  return (
    <View>
      <Text style={{fontSize: 40}}>Life Cycle with useEffect in RN</Text>
      <Text style={{fontSize: 30}}>{count}</Text>
      <Button title="Update Count" onPress={setCount(2)} />
    </View>
  );
}

export default App;
