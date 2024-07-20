import {EAppColors} from '@constants/colors.constant';
import HomeScreen from '@screens/home';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
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
