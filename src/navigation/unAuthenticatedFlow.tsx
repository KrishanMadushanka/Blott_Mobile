import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import Register from '../screens/onboarding/register';
import AllowNotifications from '../screens/onboarding/allowNotifications';
import {AllowNotificationsScreen, RegisterScreen} from '../utils/screens';

export type UnAuthNavigationProp = StackNavigationProp<UnAuthStackList>;

export type UnAuthStackList = {
  Register: undefined;
  AllowNotifications: {firstName: string; lastName: string};
};

const UnAuthenticatedStack = createStackNavigator<UnAuthStackList>();

interface UnAuthProps {
  setIsAuthenticated: (bool: boolean) => void;
}

const UnAuthenticatedStackNavigator = ({setIsAuthenticated}: UnAuthProps) => {
  return (
    <UnAuthenticatedStack.Navigator>
      <UnAuthenticatedStack.Screen
        name={RegisterScreen}
        options={{headerShown: false, gestureEnabled: false}}
        component={Register}
      />
      <UnAuthenticatedStack.Screen
        name={AllowNotificationsScreen}
        options={{headerShown: false, gestureEnabled: false}}>
        {props => (
          <AllowNotifications
            {...props}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
      </UnAuthenticatedStack.Screen>
    </UnAuthenticatedStack.Navigator>
  );
};

export default UnAuthenticatedStackNavigator;
