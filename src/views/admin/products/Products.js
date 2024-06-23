import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {prefixUrl} from '../../../services/instance';
import SearchedProducts from '../../products/SearchedProducts';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../../../shared/Style";
import ListItem from './ListItem';

let {width, height} = Dimensions.get('window');
const ListHeader = () => {
  return (
    <View elevation={1}
    style={styles.listHeader}>
      <View style={styles.headerItem}></View>
      <View style={styles.headerItem}>
        <Text style={styles.text}>Brand</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.text}>Name</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.text}>Category</Text>
      </View >
      <View style={styles.headerItem}>
        <Text style={styles.text}>Price</Text>
      </View >
    </View>
  );
}
const Products = props => {
  const [productList, setProductList] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('jwt')
        .then(res => {
          setToken(res);
        })
        .catch(error => console.log(error));

      axios.get(`${prefixUrl}/products`).then(res => {
        setProductList(res.data);
        setProductsFiltered(res.data);
        setLoading(false);
      });

      return () => {
        setProductList();
        setProductsFiltered();
        setLoading(true);
      };
    }, []),
  );
  return (
    <View>
      <View style={styles.search}>
        <Icon name="search" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          // onFocus={openList}
          // onChangeText={text => searchProduct(text)}
        />
        {/*{focus === true ? <Icon name="close" onPress={onBlur} /> : null}*/}
      </View>
      {loading ? (
        <View>
          <ActivityIndicator
            style={style.spinner}
            size="large"
            color="red"
          />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={ListHeader}
          data={productsFiltered}
          renderItem={({item, index}) => (
            <ListItem
              {...item}
              navigation={props.navigation}
              key={index}
              index={index}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
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
  listHeader:{
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'gainsboro',
  },
  headerItem:{
    margin: 3,
    width: width / 6,
  },
  text:{
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Products;
