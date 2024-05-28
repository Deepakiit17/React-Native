import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, View} from 'react-native';

function App() {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="blue" barStyle={barStyle} hidden={hide} />
      <Button title="Toggle Status Bar" onPress={() => setHide(!hide)} />
      <Button
        title="Update Style"
        onPress={() => setBarStyle('dark-content')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
