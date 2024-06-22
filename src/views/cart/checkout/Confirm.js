import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, FlatList, Image } from "react-native";
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/cartActions';
import style from '../../../shared/Style';
import { Button } from "react-native-paper";

let {height} = Dimensions.get('window');
const Confirm = props => {
  const confirm = props.route.params;
  const confirmOrder = () => {
      setTimeout(() => {
        props.clearCart();
        props.navigation.navigate('Cart');
      }, 1000);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={style.title}>Confirm Order</Text>
      </View>
      {props.route.params ? (
        <View style={styles.confirm}>
          <Text style={styles.title}> Shipping to :</Text>
          <View style={{padding: 8, alignItems: 'flex-start'}}>
            <Text>Address: {confirm.order.order.shippingAddress1}</Text>
            <Text>Address: {confirm.order.order.shippingAddress2} </Text>
            <Text>City: {confirm.order.order.city} </Text>
            <Text>Postal Code: {confirm.order.order.zip} </Text>
            <Text>Country: {confirm.order.order.country} </Text>
          </View>
          <Text style={styles.title}> Items:</Text>
          {confirm.order.order.orderItems.map(item => {
            return (
              <View key={item.product.id} style={style.listCartItems}>
                <Image
                  style={styles.image}
                  resizeMode={'contain'}
                  source={{
                    uri: item.product.image
                      ? item.product.image
                      : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                  }}
                />
                <View style={style.body}>
                  <Text style={style.text}>{item.product.name}</Text>
                  <Text style={style.text}>${item.product.price}</Text>
                </View>
              </View>
            );
          })}
        </View>
      ) : null}
      <View style={{alignItems: 'center', margin: 20}}>
        <Button textColor={'blue'} onPress={confirmOrder}>
          Place order
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 0,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  confirm: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
const mapStateToProps = dispatch => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

export default connect(null, mapStateToProps)(Confirm);
