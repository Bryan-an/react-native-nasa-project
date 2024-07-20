import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '@screens/home';
import DetailScreen from '@screens/detail';
import {EAppColors} from '@constants/colors.constant';
import type {RootStackParams} from './types';

const Stack = createNativeStackNavigator<RootStackParams>();

const RoutesContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: EAppColors.Primary,
          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: EAppColors.Primary,
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesContainer;
