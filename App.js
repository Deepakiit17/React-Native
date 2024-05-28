import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 30}}>Platform : {Platform.OS}</Text>
      {Platform.OS == 'android' ? (
        <View
          style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      ) : (
        <View
          style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      )}
      <Text style={styles.text}>Hello</Text>
      <Text style={{fontSize: 20}}>{JSON.stringify(Platform)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Platform.OS == 'android' ? 'orange' : 'blue',
    fontSize: 20,
  },
});

export default App;
