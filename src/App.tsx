import React, { memo } from 'react';
import { enableScreens } from 'react-native-screens';
import RootNavigator from './navigation/RootNavigator.tsx';

enableScreens();

function App(): React.JSX.Element {
  return (
    <RootNavigator />
  );
}

export default memo(App);
