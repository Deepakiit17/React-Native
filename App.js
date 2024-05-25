import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import UserData from './Components/CompanyData';

function App() {
  const users = [
    {
      id: 1,
      name: 'anil',
      email: 'anil@text.com',
    },
    {
      id: 2,
      name: 'sam',
      email: 'sam@text.com',
    },
    {
      id: 3,
      name: 'peter',
      email: 'pet@text.com',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 40}}>Grid with Dynamic Data in RN</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData item={item} />}
      />
    </View>
  );
}

export default App;
