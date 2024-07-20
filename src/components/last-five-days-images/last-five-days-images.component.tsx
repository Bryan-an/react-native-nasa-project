import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TodaysImageModel} from '@models/todays-image.model';
import PostImageComponent from '@components/post-image';

interface Props {
  data: TodaysImageModel.PostImage[];
}

const LastFiveDaysImagesComponent: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {data.map(postImage => (
          <PostImageComponent key={postImage.title} data={postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LastFiveDaysImagesComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginBottom: 18,
  },
});
