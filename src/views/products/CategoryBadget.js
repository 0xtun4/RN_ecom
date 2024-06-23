import React from 'react';
import {Dimensions, Image, Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
let {width} = Dimensions.get('window');

const CategoryBadget = props => {
  const {name} = props;
  return (
    <View>
      <Button
        type="elevated"
        mode="elevated"
        buttonColor={'#6d9ff2'}
        textColor="white">
        {name}
      </Button>
    </View>
  );
};

export default CategoryBadget;
