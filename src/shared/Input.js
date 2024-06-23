import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      value={props.value}
      autoCorrect={props.autoCorrect}
      onChangeText={props.onChangeText}
      onFocus={props.onFocus}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Input;
