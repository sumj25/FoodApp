import React from 'react';

import { View,Text,StyleSheet,Dimensions,StatusBar } from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/utils/styles';

import {Icon} from 'react-native-elements';
import LoginScreen from './src/screen/authScreen/LogInScreen';
import WelcomeScreen from './src/screen/authScreen/WelcomeScreen';
import RootNavigator from './src/navigation/RootNavigator';

export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor={colors.statusbar}
      />
     {/* <LoginScreen/> */}
     <RootNavigator/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.headerText
  }
})