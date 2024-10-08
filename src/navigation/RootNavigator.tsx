import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { memo, useState } from 'react';
import OnboardingScreen from '../screens/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from './types';
import AuthNavigator from './AuthNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(()  => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunched');
        if (hasLaunched === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem('hasLaunched', 'true');
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.log('Error @checkFirstLaunch: ', error);
      }
    };

    checkFirstLaunch();
  },[]);


  // if (isLoading) {
  //   return null;
  // }

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isFirstLaunch ? (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
        </>
      ) : (
      <Stack.Screen name="Main" component={MainNavigator} />
     )}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default memo(RootNavigator);
