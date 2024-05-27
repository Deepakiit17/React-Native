import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{fontSize: 40}}>useEffect as componentDidUpdate in RN</Text>
      <Button title="Toggle Component" onPress={() => setShow(!show)} />
      {show ? <User /> : null}
    </View>
  );
}

const User = props => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>User Component</Text>
    </View>
  );
};

export default App;
