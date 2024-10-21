import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/colors';
import {FontFamily, FontSize} from '../../utils/fonts';

interface ErrorProps {
  text: string;
  textColor?: string;
}

const ErrorText = ({text, textColor = colors.white}: ErrorProps) => {
  return <Text style={[styles.text, {color: textColor}]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.ftSize_16,
    lineHeight: 24,
    fontFamily: FontFamily.ftFamily_Rubik_Medium,
  },
});

export default ErrorText;
