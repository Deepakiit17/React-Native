import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App() {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = 'http://localhost:3000/users';
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if (result) {
      setData(result);
    }
  };

  const deleteUser = async id => {
    const url = 'http://localhost:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    if (result) {
      console.warn('User Deleted');
      getAPIData();
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>List with API data</Text>
      <View style={styles.dataWrapper}>
        <View style={{flex: 1}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Age</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View style={styles.dataWrapper}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update" />
              </View>
            </View>
          ))
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
    padding: 8,
  },
});

export default App;
