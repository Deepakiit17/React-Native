import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.warn('do some animation');
  // }, [count]);

  // useEffect(() => {
  //   console.warn('call some api here');
  // }, [data]);

  return (
    <View>
      <Text style={{fontSize: 40}}>useEffect as componentDidUpdate in RN</Text>
      <Text style={{fontSize: 30}}>{count}</Text>
      <Text style={{fontSize: 40}}>{data}</Text>
      <Button title="Update Count" onPress={() => setCount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(data + 1)} />
      <User info={{data, count}} />
    </View>
  );
}

const User = props => {
  useEffect(() => {
    console.warn('run this code when count prop is updated');
  }, [props.info.count]);

  useEffect(() => {
    console.warn('run this code when data prop is updated');
  }, [props.info.data]);
  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>
        Data : {props.info.count}
      </Text>
      <Text style={{fontSize: 30, color: 'orange'}}>
        Data : {props.info.data}
      </Text>
    </View>
  );
};

export default App;
