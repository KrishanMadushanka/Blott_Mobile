import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {useState} from 'react';
import AuthenticatedStackNavigator from './authenticatedFlow';
import UnAuthenticatedStackNavigator from './unAuthenticatedFlow';
import {getData} from '../utils/localStorage';
import {USER} from '../utils/constants';

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onReadyNavigation = async () => {
    try {
      let user = await getData(USER);
      setIsAuthenticated(!!user);
      await BootSplash.hide({fade: true});
    } catch (error) {
      return;
    }
  };

  return (
    <NavigationContainer onReady={onReadyNavigation}>
      {/* select navigation stack based on authenticated status */}
      {isAuthenticated ? (
        <AuthenticatedStackNavigator />
      ) : (
        <UnAuthenticatedStackNavigator
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
