import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <View>
      <Text style={{fontSize: 40}}>Simple Form in RN</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <View style={{marginBottom: 10}}>
        <Button
          title="Print Details"
          onPress={() => setDisplay(true)}
          color={'green'}
        />
      </View>
      <Button title="Clear Details" onPress={resetFormData} />
      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 15}}>User Name is :{name}</Text>
            <Text style={{fontSize: 15}}>User Password is : {password} </Text>
            <Text style={{fontSize: 15}}>User Email is : {email}</Text>
          </View>
        ) : null}
      </View>
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
