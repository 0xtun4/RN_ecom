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
        buttonColor={randomColor()}
        textColor="black">
        {name}
      </Button>
    </View>
  );
};

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export default CategoryBadget;
