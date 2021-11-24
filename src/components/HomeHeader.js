/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';

import {colors} from '../utils/styles';
export default function HomeHeader({navigation}) {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View style={styles.headerStyle}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.headerText}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.headerText}>Foodie</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={32}
          color={colors.headerText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
