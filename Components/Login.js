import {Button, Text, View} from 'react-native';

export const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Lock Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};
