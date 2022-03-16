import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {AuthencationNav} from './AuthNav';

const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <AuthencationNav />
        </NavigationContainer>
    );
};

export default RootNavigator;