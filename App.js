/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import ProductContainer from './src/views/products/ProductContainer.js';
import Header from './src/shared/Header.js';
import {View, LogBox} from 'react-native';

LogBox.ignoreAllLogs(true);
function App() {
  return (
    <View>
      <Header />
      <ProductContainer />
    </View>
  );
}
export default App;
