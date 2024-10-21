import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/colors';
import {FontFamily, FontSize} from '../../utils/fonts';

interface HeadingProps {
  text: string;
  textColor?: string;
}

const HeadingXXL = ({text, textColor = colors.white}: HeadingProps) => {
  return <Text style={[styles.text, {color: textColor}]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.ftSize_32,
    fontFamily: FontFamily.ftFamily_Raleway_Black,
  },
});

export default HeadingXXL;
