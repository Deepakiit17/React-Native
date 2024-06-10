import React from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import Header from './Header';
import Product from './Product';
const ProductWrapper = navigation => {
  const products = [
    {
      name: 'Samsung Mobile',
      color: 'White',
      price: 30000,
      image: 'https://cdn-icons-png.flaticon.com/512/0/191.png',
    },
    {
      name: 'Nokia Mobile',
      color: 'Blue',
      price: 20000,
      image: 'https://cdn-icons-png.flaticon.com/512/0/191.png',
    },
    {
      name: 'Apple I phone',
      color: 'Black',
      price: 70000,
      image: 'https://cdn-icons-png.flaticon.com/512/0/191.png',
    },
  ];
  return (
    <View style={styles.container}>
      <Button
        title="Go to User List"
        onPress={() => navigation.navigate('User')}
      />
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductWrapper;
