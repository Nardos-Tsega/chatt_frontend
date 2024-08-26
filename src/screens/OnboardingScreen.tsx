import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Colors from '../constants/Colors';
import { fontFamilies } from '../utils/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = async () => {
    try {
      await AsyncStorage.setItem('hasLaunched', 'true');
      navigation.reset({
        index: 0,
        routes: [{name: 'Main' }],
      });
    } catch (error) {
      console.log('Error @handleDone: ', error);
    }
  };

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: Colors.paleBlue,
          image: <Image style={styles.image} source={require('../../assets/images/general.png')} />,
          title: 'Tired of boring chats?',
          subtitle: 'Chat with available and random people around the world',
        },
        {
          backgroundColor: Colors.paleBlue,
          image: <Image style={styles.image} source={require('../../assets/images/bots.png')} />,
          title: 'Tired of humans?',
          subtitle: 'We have intelligent bots to chat with you',
        },
        {
          backgroundColor: Colors.paleBlue,
          image: <Image style={styles.image} source={require('../../assets/images/humans.png')} />,
          title: 'Are you a human?',
          subtitle: 'Invite your contacts chat with them',
        },
      ]}
      containerStyles={styles.container}
      titleStyles={styles.title}
      subTitleStyles={styles.subtitle}
      onDone={handleDone}
  />
  );
};

export default memo(OnboardingScreen);

const styles = StyleSheet.create({
  container :{
    backgroundColor: Colors.lightBlue2,
  },
  title : {
    fontFamily:  fontFamilies.LORA.bold,
    fontSize: 24,
    color: Colors.paleBlue,
  },
  subtitle: {
    fontFamily:  fontFamilies.LORA.normal,
    fontSize: 16,
    color: Colors.paleBlue,
  },
  image: {
    height: 200,
    width: 200,
  },
});
