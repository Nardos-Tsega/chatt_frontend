import React, { memo } from 'react';
import { enableScreens } from 'react-native-screens';
import RootNavigator from './navigation/RootNavigator.tsx';
import { Provider } from 'react-redux';
import store from './store/index.ts';

enableScreens();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default memo(App);
