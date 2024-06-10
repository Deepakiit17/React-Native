import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from './redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  return (
    <View>
      <Text>User List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserList;
