import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TodaysImageModel} from '@models/todays-image.model';
import {EAppColors} from '@constants/colors.constant';

export interface Props {
  data: TodaysImageModel.ResponseOfGet;
}

const TodaysImageComponent: React.FC<Props> = ({data}) => {
  const {url, title, date} = data;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.image} />
      </View>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <Button title="View" />
    </View>
  );
};

export default TodaysImageComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: EAppColors.LightPrimary,
    borderRadius: 32,
    padding: 16,
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 32,
  },
  image: {
    width: '100%',
    borderRadius: 32,
  },
});
