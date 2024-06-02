import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

function App() {
  const [data, setData] = useState([]);

  const searchUser = async text => {
    const url = `http://10.0.2.2:3000/users/q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 1,
          margin: 15,
          fontSize: 20,
        }}
      />
      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 20}}>{item.name}</Text>
              <Text style={{fontSize: 20}}>{item.age}</Text>
              <Text style={{fontSize: 20}}>{item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
}

export default App;
