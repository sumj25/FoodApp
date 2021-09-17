import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AuthNavigation/>
        </NavigationContainer>
    )
}