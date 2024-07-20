import {EAppColors} from '@constants/colors.constant';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RoutesContainer from '@routes/routes';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RoutesContainer />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: EAppColors.Primary,
  },
});
