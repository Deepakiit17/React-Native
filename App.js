import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Student from './Components/CompanyData';

class App extends Component {
  fruit = () => {
    console.warn('Apple');
  };
  render() {
    return (
      <View>
        <Text style={{fontSize: 40, color: 'red'}}>Class Component in RN</Text>
        <TextInput placeholder="Enter Your Name" />
        <Button title="Press Me" onPress={this.fruit} />
        <Student />
      </View>
    );
  }
}

export default App;
