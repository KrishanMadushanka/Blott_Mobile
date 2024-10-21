import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {
  UnAuthNavigationProp,
  UnAuthStackList,
} from '../../navigation/unAuthenticatedFlow';
import {colors} from '../../utils/colors';
import notifications from '../../../assets/icons/notifications.png';
import HeadingLG from '../../components/texts/headingLG';
import BodyMD from '../../components/texts/bodyMD';
import TextButton from '../../components/buttons/textButton';
import {storeData} from '../../utils/localStorage';
import {USER} from '../../utils/constants';
import BackButton from '../../components/buttons/backButton';
import {useTranslation} from 'react-i18next';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

interface NotificationProps {
  setIsAuthenticated: (bool: boolean) => void;
}

const AllowNotifications = ({setIsAuthenticated}: NotificationProps) => {
  const route = useRoute<RouteProp<UnAuthStackList>>();
  const {firstName, lastName} = route.params!;
  const navigation = useNavigation<UnAuthNavigationProp>();
  const {t} = useTranslation();

  // Store user data in async storage
  const onPressContinue = () => {
    storeData(USER, JSON.stringify({firstName: firstName, lastName: lastName}))
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        return;
      });
  };

  //Requesting push notification permissions for ios and andriod
  const requestUserPermission = async () => {
    if (Platform.OS === 'ios') {
      await PushNotificationIOS.requestPermissions();
    } else {
      if (+Platform.Version >= 33) {
        await requestPermission();
      }
    }
    onPressContinue();
  };

  const requestNotificationPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    return result;
  };

  const checkNotificationPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    return result;
  };

  //Requesting permissions for andriod 13
  const requestPermission = async () => {
    const checkPermission = await checkNotificationPermission();
    if (checkPermission !== RESULTS.GRANTED) {
      const request = await requestNotificationPermission();
      if (request !== RESULTS.GRANTED) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const onPressBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackButton onPress={onPressBack} />
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Image style={styles.image} source={notifications} />
          <View style={styles.heading}>
            <HeadingLG text={t('notification.heading')} />
          </View>
          <BodyMD txtAlign="center" text={t('notification.description')} />
        </View>
        <View style={styles.btn}>
          <TextButton
            onPress={requestUserPermission}
            text={t('notification.continue')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.blottWhite,
  },
  outerContainer: {
    paddingHorizontal: 24,
    backgroundColor: colors.blottWhite,
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 98,
    height: 98,
  },
  heading: {
    marginTop: 24,
    marginBottom: 16,
  },
  btn: {
    width: '100%',
    marginBottom: 16,
  },
});

export default AllowNotifications;
