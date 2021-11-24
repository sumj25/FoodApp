import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screen/authScreen/WelcomeScreen';
import LoginScreen from '../screen/authScreen/LogInScreen';
import RestaurantMapScreen from '../screen/RestaurantMapScreen';
import DrawerNavigator from './DrawerNavigation';
const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="WelcomScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="LogInScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStack.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
