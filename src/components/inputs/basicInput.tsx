import {StyleSheet, TextInput} from 'react-native';
import {FontFamily, FontSize} from '../../utils/fonts';
import {colors} from '../../utils/colors';

interface BasicInputProps {
  placeholder: string;
  onChangeTxt: (value: string) => void;
}

const BasicInput = ({placeholder, onChangeTxt}: BasicInputProps) => {
  return (
    <TextInput
      onChangeText={onChangeTxt}
      style={[styles.textInput]}
      placeholderTextColor={colors.blottDarkGray}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: FontSize.ftSize_20,
    borderBottomColor: colors.blottPaleGray,
    borderBottomWidth: 1,
    color: colors.black,
    height: 46,
    fontFamily: FontFamily.ftFamily_Roboto_Regular,
    lineHeight: 30,
  },
});

export default BasicInput;
