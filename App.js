import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'http://192.168.162.154:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 40}}>Call JSON server API Call</Text>
      {data.length
        ? data.map(item => (
            <View style={{borderWidth: 1, borderColor: 'red'}}>
              <Text style={{fontSize: 30, backgroundColor: 'aqua'}}>
                id : {item.id}
              </Text>
              <Text style={{fontSize: 30}}>{item.name}</Text>
              <Text style={{fontSize: 30}}>{item.age}</Text>
            </View>
          ))
        : null}
    </View>
  );
}

export default App;
