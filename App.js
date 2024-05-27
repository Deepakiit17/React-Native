import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{fontSize: 40}}>useEffect for unmount component in RN</Text>
      <Button title="Toggle Component" onPress={() => setShow(!show)} />
      {show ? <User /> : null}
    </View>
  );
}

const User = () => {
  let timer = setInterval(() => {
    console.warn('Timer Called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Student</Text>
    </View>
  );
};

export default App;
