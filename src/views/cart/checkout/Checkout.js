import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import FormContainer from '../../../shared/FormContainer';
import Input from '../../../shared/Input';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from 'react-native-elements';

const countries = require('../../../../assets/data/countries.json');
const Checkout = props => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);

    return () => {
      setOrderItems();
    };
  }, []);
  const checkOut = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
    };

    props.navigation.navigate('Payment', {order: order});
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}>
      <FormContainer title={'Shipping Anddress'}>
        <Input
          placeholder={'Phone'}
          name={'phone'}
          value={phone}
          keyboardType={'numeric'}
          onChangeText={text => setPhone(text)}
        />
        <Input
          placeholder={'Address'}
          name={'address'}
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <Input
          placeholder={'Address 2'}
          name={'address2'}
          value={address2}
          onChangeText={text => setAddress2(text)}
        />
        <Input
          placeholder={'City'}
          name={'city'}
          value={city}
          onChangeText={text => setCity(text)}
        />
        <Input
          placeholder={'Zip Code'}
          name={'zip'}
          value={zip}
          keyboardType={'numeric'}
          onChangeText={text => setZip(text)}
        />
        <RNPickerSelect
          items={countries}
          style={pickerSelectStyles}
          onValueChange={value => setCountry(value)}
        />
        <View style={{width: '80%', alignItems: 'center'}}>
          <Button title="Confirm" onPress={() => checkOut()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};
const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    padding: 30,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white',
  },
});
export default connect(mapStateToProps)(Checkout);
