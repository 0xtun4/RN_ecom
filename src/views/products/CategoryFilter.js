import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import CategoryBadget from './CategoryBadget';

const CategoryFilter = props => {
  const {item} = props;
  return (
    <ScrollView style={styles.scrollView} bounces={true} horizontal={true}>
      <TouchableOpacity key={1} style={styles.listItem}>
        <CategoryBadget {...item} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gainsboro',
    marginHorizontal: 5,
  },

  listItem: {
    flexDirection: 'row',
  },
});

export default CategoryFilter;
