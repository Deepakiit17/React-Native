import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App() {
  const users = [
    {
      id: 1,
      name: 'anil',
    },
    {
      id: 2,
      name: 'sam',
    },
    {
      id: 3,
      name: 'peter',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 5,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 10,
      name: 'tony',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
    {
      id: 4,
      name: 'bruce',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 40}}>Grid with Dynamic Data in RN</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {users.map(item => (
          <Text style={styles.textInput}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 25,
    color: '#fff',
    padding: 5,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default App;
