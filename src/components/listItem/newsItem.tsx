import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import {News} from '../../utils/dto';
import {colors} from '../../utils/colors';
import {FontFamily, FontSize} from '../../utils/fonts';
import {convertTimestamp} from '../../utils/dates';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewsItem = ({image, source, datetime, headline, url}: News) => {
  const onPress = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.txtContainer}>
          <View style={styles.topTxtContainer}>
            <Text style={styles.source}>{source?.toUpperCase()}</Text>
            <Text style={styles.source}>
              {convertTimestamp(datetime).toUpperCase()}
            </Text>
          </View>
          <Text numberOfLines={3} style={styles.headline}>
            {headline}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headline: {
    color: colors.white,
    fontSize: FontSize.ftSize_20,
    lineHeight: 24,
    fontFamily: FontFamily.ftFamily_Roboto_Medium,
  },
  source: {
    color: colors.white,
    fontSize: FontSize.ftSize_12,
    lineHeight: 16,
    opacity: 0.7,
    fontFamily: FontFamily.ftFamily_Rubik_Regular,
  },
  container: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  txtContainer: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  topTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NewsItem;
