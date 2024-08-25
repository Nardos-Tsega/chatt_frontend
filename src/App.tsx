import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontFamilies } from './utils/fontFamilies.ts';
import Colors from './constants/Colors.ts';
import OnboardingScreen from './screens/OnboardingScreen.tsx';
import { enableScreens } from 'react-native-screens';
import RootNavigator from './navigation/RootNavigator.tsx';

enableScreens();

function App(): React.JSX.Element {
  
  return (
    <RootNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  regularText: {
    fontFamily:  fontFamilies.BODONI.medium,
    fontSize: 18,
    marginBottom: 10,
  },
  boldText: {
    fontFamily: fontFamilies.LORA.medium,
    fontSize: 18,
  },
});

export default App;
