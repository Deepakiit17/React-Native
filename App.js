import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from './Components/Header';
import Product from './Components/Product';

function App() {
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
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
