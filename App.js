import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 40}}>Flatlist with API Call</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                borderBottomColor: 'orange',
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 20, backgroundColor: 'aqua'}}>
                id : {item.id}
              </Text>
              <Text style={{fontSize: 18}}>{item.title}</Text>
              <Text style={{fontSize: 18}}>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}

export default App;
