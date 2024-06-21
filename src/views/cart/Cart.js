import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import * as actions from '../../redux/actions/cartActions';
import {Button} from 'react-native-elements';
import style from '../../shared/style';
import {Swipeable} from 'react-native-gesture-handler';
const Cart = props => {
  const rightSwipeActions = item => {
    console.log(item);
    return (
      <View style={styles.swipeable}>
        <TouchableOpacity
          onPress={() => {
            props.removeFromCart(item.product.id);
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              paddingHorizontal: 30,
              paddingVertical: 20,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      {props.cartItems.length > 0 ? (
        <View style={style.container}>
          {props.cartItems.map((item, index) => {
            return (
              <Swipeable renderRightActions={() => rightSwipeActions(item)}>
                <View key={item.product.id} style={styles.listCartItems}>
                  <Image
                    style={styles.image}
                    resizeMode={'contain'}
                    source={{
                      uri: item.product.image
                        ? item.product.image
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                    }}
                  />
                  <View style={styles.body}>
                    <Text style={style.text}>{item.product.name}</Text>
                    <Text style={style.text}>${item.product.price}</Text>
                  </View>
                </View>
              </Swipeable>
            );
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
    removeFromCart: item => dispatch(actions.removeFromCart(item)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeable: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  listCartItems: {
    borderBottomWidth: 0.5,
    borderStyle: 'dotted',
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    bottom: 0,
    left: 0,
  },

  body: {
    width: Dimensions.get('window').width - 90,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    right: 0,
  },
  image: {
    width: 90,
    height: 90,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
