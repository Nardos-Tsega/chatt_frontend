import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Auth: undefined;
};

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type MainNavigationProp = NativeStackNavigationProp<MainStackParamList>;
export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type AuthRouteProp<RouteName extends keyof AuthStackParamList> = RouteProp<AuthStackParamList, RouteName>;
export type MainRouteProp<RouteName extends keyof MainStackParamList> = RouteProp<MainStackParamList, RouteName>;
export type RootRouteProp<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>;
