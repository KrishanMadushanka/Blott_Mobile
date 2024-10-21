import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import { FontFamily } from '../../utils/fonts';

interface TextBtnProps {
  onPress: () => void;
  isDisabled?: boolean;
  text: string;
}

const TextButton = ({onPress, text, isDisabled = false}: TextBtnProps) => {
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <View style={[styles.btn, isDisabled && {opacity: 0.4}]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.blottPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.textWhite,
    fontFamily: FontFamily.ftFamily_Roboto_Medium
  },
});

export default TextButton;
