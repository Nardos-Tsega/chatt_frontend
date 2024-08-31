import React from 'react';
import { View } from 'react-native';
import CustomText from '../components/shared/CustomText';
import { memo } from 'react';

const LoadingScreen = () => {
  return (
    <View>
      <CustomText>Loading</CustomText>
    </View>
  );
};

export default memo(LoadingScreen);
