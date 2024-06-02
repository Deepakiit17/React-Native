import React, {useEffect, useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const getAPIData = async () => {
    const url = 'http://localhost:3000/users';
    try {
      let result = await fetch(url);
      result = await result.json();
      if (result) {
        setData(result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = async id => {
    const url = 'http://localhost:3000/users';
    try {
      let result = await fetch(`${url}/${id}`, {
        method: 'delete',
      });
      result = await result.json();
      if (result) {
        console.warn('User Deleted');
        getAPIData();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  const updateUser = () => {
    setShowModal(true);
    setSelectedUser(data);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>List with API data</Text>
      <View style={styles.dataWrapper}>
        <View style={{flex: 1}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Age</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View key={item.id} style={styles.dataWrapper}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update" onPress={() => updateUser(item)} />
              </View>
            </View>
          ))
        : null}
      <Modal visible={showModal} transparent={true}>
        <UserModal setShowModal={setShowModal} selectedUser={selectedUser} />
      </Modal>
    </View>
  );
}

const UserModal = props => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>{props.selectedUser.name}</Text>
        <Button title="Close" onPress={() => props.setShowModal(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
    padding: 7,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    elevation: 5,
  },
});

export default App;
