import React from 'react';
import { StyleSheet, Dimensions, View, FlatList } from 'react-native';
import ProductList from './ProductList';

var {width} = Dimensions.get('window');

const SearchedProduct = props => {
  const {productsFiltered} = props;
  return (
    <View>
      <FlatList
        numColumns={2}
        data={productsFiltered}
        renderItem={({item}) => <ProductList key={item.brand} item={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default SearchedProduct;
