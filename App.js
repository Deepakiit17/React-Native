import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function App() {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 40}}>Handle Text Input in RN</Text>
      <Text style={{fontSize: 40}}>Your name is : {name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        onChangeText={text => setName(text)}
      />
      <Button
        title="Clear Input Value"
        onPress={() => setName('')}
        color={'aqua'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

export default App;
