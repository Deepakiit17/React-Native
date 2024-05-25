import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default UserData = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.textInput}>{item.name}</Text>
      <Text style={styles.textInput}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});
