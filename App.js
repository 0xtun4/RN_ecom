/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import ProductContainer from './src/views/products/ProductContainer.js';
import Header from './src/shared/Header.js';
import {View} from 'react-native';

function App() {
  return (
    <View>
      <Header />
      <ProductContainer />
    </View>
  );
}
export default App;
