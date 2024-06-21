import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import CartIcon from "../shared/CartIcon";
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="home"
              style={{position: 'relative'}}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <View>
              <Icon
                name="shopping-cart"
                style={{position: 'relative'}}
                color={color}
                size={30}
              />
              <CartIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="cogs"
              style={{position: 'relative'}}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="user"
              style={{position: 'relative'}}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
