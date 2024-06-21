import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  TextInput,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <SafeAreaView>
      <Image
        style={styles.header}
        source={require('../../assets/Logo.png')}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    elevation: 8,
    height: 50,
  },
});
export default Header;
