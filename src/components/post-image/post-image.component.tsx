import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TodaysImageModel} from '@models/todays-image.model';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '@routes/types';

interface Props {
  data: TodaysImageModel.PostImage;
}

const PostImageComponent: React.FC<Props> = ({data}) => {
  const {navigate} = useNavigation<HomeScreenNavigationProp>();

  const handleViewPress = () => {
    navigate('Detail', {data});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

export default PostImageComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,255)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});
