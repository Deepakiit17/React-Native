/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Button, Text, View} from 'react-native';
import CompanyData from './Components/CompanyData';

function App() {
  return (
    <View>
      <Text style={{fontSize: 40}}>React Native with TS</Text>
      <Button title="Press Here" />
      <CompanyData />
    </View>
  );
}

export default App;
