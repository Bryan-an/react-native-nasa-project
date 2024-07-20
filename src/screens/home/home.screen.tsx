import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '@components/header';
import {fetchData} from '@utils/fetch';
import {TodaysImageModel} from '@models/todays-image.model';
import TodaysImageComponent from '@components/todays-image';
import {format, sub} from 'date-fns';
import LastFiveDaysImagesComponent from '@components/last-five-days-images';

const HomeScreen = () => {
  const [todaysImageData, setTodaysImageData] =
    useState<TodaysImageModel.Image>();

  const [lastFiveDaysImagesData, setLastFiveDaysImagesData] = useState<
    TodaysImageModel.PostImage[]
  >([]);

  useEffect(() => {
    fetchData()
      .then(data => !Array.isArray(data) && setTodaysImageData(data))
      .catch(() => setTodaysImageData(undefined));
  }, []);

  useEffect(() => {
    const date = new Date();
    const todaysDate = format(date, 'yyyy-MM-dd');
    const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');

    fetchData({start_date: fiveDaysAgoDate, end_date: todaysDate})
      .then(data => Array.isArray(data) && setLastFiveDaysImagesData(data))
      .catch(() => setLastFiveDaysImagesData([]));
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComponent />
      {todaysImageData && (
        <View style={styles.imageContainer}>
          <TodaysImageComponent data={todaysImageData} />
        </View>
      )}
      <LastFiveDaysImagesComponent data={lastFiveDaysImagesData} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  imageContainer: {
    marginVertical: 16,
    marginHorizontal: 24,
  },
});
