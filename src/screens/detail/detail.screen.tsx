import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {DetailScreenRouteProp} from '@routes/types';
import Header from '@components/header';
import {EAppColors} from '@constants/colors.constant';

const DetailScreen = () => {
  const {
    params: {data},
  } = useRoute<DetailScreenRouteProp>();

  const {height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Header />
      <View style={[styles.content, {maxHeight: height - 250}]}>
        <Image source={{uri: data.url}} style={styles.image} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.date}>{data.date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{data.explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: EAppColors.LightPrimary,
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    objectFit: 'cover',
    borderColor: 'white',
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: 'white',
    fontSize: 16,
  },
});
