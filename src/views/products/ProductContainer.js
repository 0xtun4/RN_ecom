'use strict';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';
import BannerCarousel from '../../shared/Banner';
import CategoryFilter from './CategoryFilter';

const data = require('../../../assets/data/products.json');
const categoriesData = require('../../../assets/data/categories.json');

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(categoriesData);
    setActive(-1);
    setInitialState(data);
    return () => {
      setProducts([]);
      setFocus(false);
      setProductsFiltered([]);
      setCategories([]);
      setActive();
      setInitialState();
    };
  }, [categories]);

  const searchProduct = text => {
    setProductsFiltered(
      products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };

  const renderData = ({item, index}) => {
    return (
      <View>
        <Image source={{uri: item.source}} style={styles.carouselImage} />
      </View>
    );
  };

  const dataBanner = [
    {
      source: 'https://www.freepngimg.com/thumb/fifa/11-2-fifa-png-images.png',
      name: 'banner 1',
    },
    {
      source:
        'https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w',
      name: 'banner 2',
    },
    {
      source: 'https://www.freepngimg.com/thumb/fifa/11-2-fifa-png-images.png',
      name: 'banner 3',
    },
  ];

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const changeCtg = ctg => {
    {
      ctg === 'all'
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter(i => i.category.$oid === ctg),
              setActive(true),
            ),
          ];
    }
  };

  return (
    <View style={{backgroundColor: 'gainsboro'}}>
      <View style={styles.search}>
        <Icon name="search" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onFocus={openList}
          onChangeText={text => searchProduct(text)}
        />
        {focus === true ? <Icon name="close" onPress={onBlur} /> : null}
      </View>
      <View>
        {focus === true ? (
          <SearchedProducts
            navigation={props.navigation}
            productsFiltered={productsFiltered}
          />
        ) : (
          <View>
            <View style={styles.carousel}>
              <BannerCarousel dataBanner={dataBanner} renderData={renderData} />
            </View>
            <FlatList
              horizontal={true}
              data={categories}
              renderItem={({item}) => (
                <CategoryFilter item={item} key={item.name} />
              )}
              keyExtractor={item => item.name}
            />
            <FlatList
              numColumns={2}
              data={products}
              renderItem={({item}) => (
                <ProductList
                  navigation={props.navigation}
                  key={item.brand}
                  item={item}/>
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
    width: '90%',
  },

  carousel: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderBlockColor: 'black',
    margin: 10,
  },

  carouselImage: {
    height: 170,
    width: 350,
  },
});

export default ProductContainer;
