import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '@components/header';
import {fetchData} from '@utils/fetch';
import {TodaysImageModel} from '@models/todays-image.model';
import TodaysImageComponent from '@components/todays-image';

const HomeScreen = () => {
  const [todaysImageData, setTodaysImageData] =
    useState<TodaysImageModel.ResponseOfGet>();

  useEffect(() => {
    fetchData()
      .then(data => setTodaysImageData(data))
      .catch(() => setTodaysImageData(undefined));
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComponent />
      {todaysImageData && (
        <View style={styles.imageContainer}>
          <TodaysImageComponent data={todaysImageData} />
        </View>
      )}
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
