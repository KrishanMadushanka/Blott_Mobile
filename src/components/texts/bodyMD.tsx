import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/colors';
import {FontFamily, FontSize} from '../../utils/fonts';

interface BodyMDProps {
  text: string;
  textColor?: string;
  txtAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

const BodyMD = ({
  text,
  textColor = colors.blottGray,
  txtAlign = 'left',
}: BodyMDProps) => {
  return (
    <Text style={[styles.text, {color: textColor, textAlign: txtAlign}]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.ftSize_16,
    lineHeight: 24,
    fontFamily: FontFamily.ftFamily_Roboto_Regular
  },
});

export default BodyMD;
