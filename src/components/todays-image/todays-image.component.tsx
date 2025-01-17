import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TodaysImageModel} from '@models/todays-image.model';
import {EAppColors} from '@constants/colors.constant';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '@routes/types';

export interface Props {
  data: TodaysImageModel.Image;
}

const TodaysImageComponent: React.FC<Props> = ({data}) => {
  const {url, title, date} = data;
  const {navigate} = useNavigation<HomeScreenNavigationProp>();

  const handleViewPress = () => {
    navigate('Detail', {data});
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
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
  image: {
    width: '100%',
    height: 190,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 32,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});
