'use strict';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';

const data = require('../../../assets/data/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    return () => {
      setProducts([]);
      setFocus(false);
      setProductsFiltered([]);
    };
  }, []);

  const searchProduct = text => {
    setProductsFiltered(
      products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View>
      <View style={styles.search}>
        <Icon name="search" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onFocus={openList}
          onChangeText={text => searchProduct(text)}
          onBlur={onBlur}
        />
      </View>
      <View>
        {focus === true ? (
          <SearchedProducts productsFiltered={productsFiltered} />
        ) : (
          <View>
            <FlatList
              numColumns={2}
              data={products}
              renderItem={({item}) => (
                <ProductList key={item.brand} item={item} />
              )}
              keyExtractor={item => item.name}
            />
          </View>
        )}
      </View>
    </View>
    // <Text style={styles.container}>Product Container</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  listContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  search: {
    marginTop: 10,
    borderRadius: 20,
    width: '100%',
    flexDirection: 'row',
    borderRadiusBottom: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 8,
  },

  searchInput: {
    paddingLeft: 10,
    width: '100%',
  },
});

export default ProductContainer;
