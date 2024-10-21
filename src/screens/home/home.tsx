import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../../utils/colors';
import HeadingXXL from '../../components/texts/headingXXL';
import {useEffect, useState} from 'react';
import {getData} from '../../utils/localStorage';
import {USER} from '../../utils/constants';
import {getNews} from '../../api/services';
import {News, User} from '../../utils/dto';
import NewsItem from '../../components/listItem/newsItem';
import ErrorText from '../../components/texts/error';
import {AxiosError} from 'axios';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const [user, setUser] = useState<User>();
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    setLoading(true);
    //Read user data from async storage
    getData(USER)
      .then(data => {
        setUser(JSON.parse(data!));
      })
      .catch(_error => {
        setError('Error fetching user data');
        setLoading(false);
        return;
      });

    //Read news data from api
    getNews()
      .then(news => {
        setNews(news);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        if (err instanceof AxiosError) {
          if (err.response?.data) {
            setError(err.response?.data.error);
          } else {
            setError(err.message);
          }
        } else {
          setError('Something went wrong. Please try again later.');
        }
      });
  }, []);

  return (
    <>
      <SafeAreaView style={[styles.safeArea, styles.topSafeArea]} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {user && <HeadingXXL text={t('home.hey') + user.firstName} />}
          <View style={styles.errorContainer}>
            <ErrorText text={error} />
          </View>
        </View>
        {!error && !loading && (
          <FlatList
            style={styles.flatList}
            data={news}
            keyExtractor={item => item?.id?.toString()}
            renderItem={({item}) => <NewsItem {...item} />}
          />
        )}
        {loading && <ActivityIndicator size={'large'} style={styles.loader} />}
      </View>
      <SafeAreaView style={[styles.safeArea, styles.bottomSafeArea]} />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
  },
  topSafeArea: {
    backgroundColor: colors.blotDarkPurple,
  },
  bottomSafeArea: {
    backgroundColor: colors.black,
  },
  topContainer: {
    height: 121,
    backgroundColor: colors.blotDarkPurple,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  flatList: {
    marginTop: -60,
  },
  errorContainer: {
    marginTop: 24,
  },
  loader: {
    flex: 1,
  },
});

export default Home;
