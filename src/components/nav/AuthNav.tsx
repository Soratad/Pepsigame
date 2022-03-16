import React from "react";
import login from '../screens/login';
import regis from '../screens/regis';
import {createStackNavigator} from '@react-navigation/stack';
import rule from '../screens/rules'

import home from "../screens/home";
const Stack = createStackNavigator();

export const AuthencationNav: React.FC = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={login}/>
            <Stack.Screen name="regis" component={regis}/>
            <Stack.Screen name="home" component={home}/>
            <Stack.Screen name="rules" component={rule}/>
        </Stack.Navigator>
    )
}