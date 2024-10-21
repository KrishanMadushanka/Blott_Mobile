import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/colors';
import {FontFamily, FontSize} from '../../utils/fonts';

interface HeadingProps {
  text: string;
  textColor?: string;
}

const HeadingLG = ({text, textColor = colors.black}: HeadingProps) => {
  return <Text style={[styles.text, {color: textColor}]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.ftSize_24,
    fontFamily: FontFamily.ftFamily_Roboto_Bold,
    lineHeight: 30
  },
});

export default HeadingLG;
