import React from 'react';

import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import WelcomeScreen from '../screen/authScreen/WelcomeScreen';
import LoginScreen from '../screen/authScreen/LogInScreen';
import HomeScreen from '../screen/HomeScreen';
import ClientRootTab from './ClientTabNavigator';

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
        name="ClientRootTab"
        component={ClientRootTab}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
