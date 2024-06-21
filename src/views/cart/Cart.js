import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {SwipeListView } from 'react-native-swipeable-flat-list';
import * as actions from '../../redux/actions/cartActions';
import {Button} from 'react-native-elements';
import style from '../../shared/style';
import CartItem from './CartItem';
import {clearCart} from '../../redux/actions/cartActions';
const Cart = props => {
  return (
    <>
      {props.cartItems.length > 0 ? (
        <View style={style.container}>
          {props.cartItems.map((item, index) => {
            return(
              <View key={item.product} style={styles.listCartItems}>
                <Text style={style.text}>{item.product.name}</Text>
              </View>
            )
          })}
          <View style={style.bottom}>
            <Text style={style.price}>
              $ {props.cartItems.reduce((a, c) => a + c.product.price, 0)}
            </Text>
            <Button
              title="Clear"
              type={'clear'}
              onPress={() => {
                props.clearCart();
              }}
            />
            <Button title="Checkout" type={'clear'} />
          </View>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Cart is empty</Text>
          <Text>Add products to your cart to get started</Text>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
