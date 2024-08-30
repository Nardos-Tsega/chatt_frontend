import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import CustomButton from '../components/shared/CustomButton';
import Colors from '../constants/Colors';
import CustomText from '../components/shared/CustomText';

const LoginScreen = () => {

  const navigation = useNavigation<any>();

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('userToken', 'dummyToken');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View style={styles.container}>
     <CustomText style={styles.title}>Login to chatter</CustomText>
      <LoginForm handleLogin={handleLogin} />
      <CustomButton textStyle={styles.socialBtnText} style={styles.socialButton} title="Continue with Apple" onPress={handleCreateAccount} />
      <CustomButton textStyle={styles.socialBtnText} style={styles.socialButton} title="Continue with Google" onPress={handleCreateAccount} />
      <CustomButton textStyle={styles.socialBtnText} style={styles.socialButton} title="Continue with Github" onPress={handleCreateAccount} />
      <CustomButton textStyle={styles.registerText} style={styles.register} title="Create account" onPress={handleCreateAccount}/>
    </View>
  );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.white,
  },
  socialButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 6,
    width: '100%',
    marginVertical: 6,
  },
  socialBtnText : {
    color: Colors.white,
  },
  register :{
    backgroundColor: 'transparent',
    width: '100%',
  },
  registerText : {
    color: Colors.white,
    textDecorationLine: 'underline',
  },
});
