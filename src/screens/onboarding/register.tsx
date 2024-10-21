import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import HeadingXL from '../../components/texts/headingXL';
import {colors} from '../../utils/colors';
import BodyMD from '../../components/texts/bodyMD';
import BasicInput from '../../components/inputs/basicInput';
import CircularButton from '../../components/buttons/circularButton';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UnAuthNavigationProp} from '../../navigation/unAuthenticatedFlow';
import {AllowNotificationsScreen} from '../../utils/screens';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const [isBtnDisabled, setButtonDisabled] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigation = useNavigation<UnAuthNavigationProp>();
  const { t } = useTranslation();

  const onChangeFirstName = (name: string) => {
    setFirstName(name.trim());
  };

  const onChangeLastName = (name: string) => {
    setLastName(name.trim());
  };

  const onPressButton = () => {
    navigation.navigate(AllowNotificationsScreen, {firstName, lastName});
  };

  //enable disable button based on first name and last name
  useEffect(() => {
    if (firstName && lastName) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [firstName, lastName]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 24}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.innerContainer}>
          <View>
            <View style={styles.headingContainer}>
              <HeadingXL text={t('register.legalName')} />
            </View>
            <View style={styles.bodyTxtContainer}>
              <BodyMD text={t('register.description')} />
            </View>
            <View style={styles.fName}>
              <BasicInput
                onChangeTxt={onChangeFirstName}
                placeholder={t('register.fName')}
              />
            </View>
            <BasicInput
              onChangeTxt={onChangeLastName}
              placeholder={t('register.lName')}
            />
          </View>
          <View style={styles.btn}>
            <CircularButton
              isDisabled={isBtnDisabled}
              onPress={onPressButton}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.blottWhite,
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: colors.blottWhite,
    flex: 1,
  },
  innerContainer: {
    backgroundColor: colors.blottWhite,
    flex: 1,
    justifyContent: 'space-between',
  },
  headingContainer: {
    paddingVertical: 10,
  },

  bodyTxtContainer: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  fName: {
    marginBottom: 21,
  },
  btn: {
    marginBottom: 24,
    alignSelf: 'flex-end',
  },
});

export default Register;
