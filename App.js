import React, {useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';

function App() {
  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 5000);
  };
  return (
    <View style={styles.main}>
      <ActivityIndicator size={100} color="green" animating={show} />
      {show ? <ActivityIndicator size="large" color="red" /> : null}
      <Button title="show loader" onPress={displayLoader} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
