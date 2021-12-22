import React, {useLayoutEffect} from 'react';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import SearchScreen from '../screen/SearchScreen';
import SearchResultScreen from '../screen/SearchResultScreen';

const ClientSearch = createNativeStackNavigator();

export function ClientStack({navigation, route}) {
  // useLayoutEffect(()=>{

  // const routeName = getFocusedRouteNameFromRoute(route);
  // if(routeName === "RestaurantHomeScreen" || "MenuProductScreen"){
  //     navigation.setOptions({tabBarVisible:false})
  // }else{
  //     navigation.setOptions({tabBarVisible:true})
  // }

  // },[navigation,route])

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
}
