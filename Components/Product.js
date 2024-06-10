import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from './redux/action';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
        marginBottom: 50,
      }}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
