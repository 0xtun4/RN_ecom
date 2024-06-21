import React from 'react';
import {Dimensions, Image, Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
let {width} = Dimensions.get('window');

const CategoryBadget = props => {
  const {name} = props;
  return (
    <View>
      <Button title={name} type="outline" containerStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default CategoryBadget;
