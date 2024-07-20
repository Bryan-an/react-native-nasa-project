import {TodaysImageModel} from '@models/todays-image.model';
import {RouteProp} from '@react-navigation/native';
import {type NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParams = {
  Home: undefined;
  Detail: {data: TodaysImageModel.Image | TodaysImageModel.PostImage};
};

export type HomeScreenNativeStackProps = NativeStackScreenProps<
  RootStackParams,
  'Home'
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'Home'
>;

export type HomeScreenRouteProp = RouteProp<RootStackParams, 'Home'>;

export type DetailScreenNativeStackProps = NativeStackScreenProps<
  RootStackParams,
  'Detail'
>;

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>;

export type DetailScreenRouteProp = RouteProp<RootStackParams, 'Detail'>;
