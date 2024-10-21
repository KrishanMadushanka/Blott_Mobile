import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import leftArrow from '../../../assets/icons/leftArrow.png';

interface BackBtnProps {
  onPress: () => void;
}

const BackButton = ({onPress}: BackBtnProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Image style={styles.icon} source={leftArrow} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: Platform.OS === 'android' ? 16 : 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default BackButton;
