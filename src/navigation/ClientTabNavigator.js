import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from '../screen/SearchScreen';
import MyOrdersScreen from '../screen/MyOrdersScreen';
import MyAccountScreen from '../screen/MyAccountScreen';
import {colors} from '../utils/styles';
const BottomTab = createBottomTabNavigator();

export default function ClientRootTab() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" clor={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" clor={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" clor={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" clor={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
