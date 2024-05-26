import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Student from './Components/CompanyData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anil',
    };
  }

  updateName(val) {
    this.setState({name: val});
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 40, color: 'blue'}}>
          State & Props in Class Component in RN
        </Text>
        <Text style={{fontSize: 30, color: 'red'}}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter Your Name"
          onChangeText={text => this.updateName(text)}
        />
        <Button title="Press Me" />
        <Student name={this.state.name} />
      </View>
    );
  }
}

export default App;
