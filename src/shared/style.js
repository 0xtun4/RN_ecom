import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  text: {
    color: 'black',
    fontSize: 16,
  },

  bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },

  button: {
    borderRadius: 10,
    marginLeft: 'auto',
  },
});

export default style;
