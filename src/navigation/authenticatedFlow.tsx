import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/home';
import {HomeScreen} from '../utils/screens';

const AuthenticatedStack = createStackNavigator();

const AuthenticatedStackNavigator = () => {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen
        name={HomeScreen}
        component={Home}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </AuthenticatedStack.Navigator>
  );
};

export default AuthenticatedStackNavigator;
