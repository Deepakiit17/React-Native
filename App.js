import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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
      <Text style={{fontSize: 40}}>List with Flat List Component in RN</Text>
      <ScrollView style={{marginBottom: 50}}>
        {users.map(item => (
          <Text style={styles.textInput}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 24,
    color: '#fff',
    padding: 10,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
});

export default App;
