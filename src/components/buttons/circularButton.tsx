import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import rightArrow from '../../../assets/icons/rightArrow.png';

interface CircularBtnProps {
  onPress: () => void;
  isDisabled: boolean;
}

const CircularButton = ({onPress, isDisabled}: CircularBtnProps) => {
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <View style={[styles.btn, isDisabled && {opacity: 0.4}]}>
        <Image style={styles.icon} source={rightArrow} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.blottPurple,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default CircularButton;
