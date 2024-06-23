import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import style from '../../../shared/Style';
let {width} = Dimensions.get('window');

const ListItem = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.index % 2 === 0 ? 'white' : 'gainsboro',
        },
      ]}>
      <Image
        source={{
          uri: props.image
            ? props.image
            : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.item}>{props.brand}</Text>
        <Text style={styles.item} numberOfLines={1} ellipsizeMode={'tail'}>
          {props.name}
        </Text>
        <Text style={styles.item} numberOfLines={1} ellipsizeMode={'tail'}>
          {props.category ? props.category.name : ''}
        </Text>
        <Text style={styles.item}>${props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    width: width,
    marginTop: 5,
  },
  body: {
    width: '10%',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    right: 0,
  },
  image: {
    borderRadius: 50,
    width: width / 6,
    height: 20,
    margin: 2,
  },
  item: {
    flexWrap: 'wrap',
    margin: 3,
    width: width / 6,
  },
});

export default ListItem;
