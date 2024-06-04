import React, {useRef} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

function App() {
  const input = useRef();

  const updateInput = () => {
    input.current.focus();
    input.current.setNativeProps({
      fontsize: 24,
      color: 'green',
    });
  };
  return (
    <View style={styles.container}>
      <TextInput ref={input} style={styles.input} placeholder="Enter Name" />
      <TextInput style={styles.input} placeholder="Enter Password" />
      <Button title="Update Input " onPress={updateInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 10,
  },
});

export default App;
