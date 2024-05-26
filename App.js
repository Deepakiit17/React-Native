import React, {useState} from 'react';
import {SectionList, Text, View} from 'react-native';

function App() {
  const users = [
    {
      id: 1,
      name: 'anil',
      data: ['js', 'html', 'css'],
    },
    {
      id: 2,
      name: 'sam',
      data: ['C', 'C++', 'Python'],
    },
    {
      id: 3,
      name: 'peter',
      data: ['UI', 'Lang', 'GO'],
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 40}}>Section List in RN</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
}

export default App;
