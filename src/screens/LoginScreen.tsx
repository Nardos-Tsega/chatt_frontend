import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import CustomButton from '../components/shared/CustomButton';
import Colors from '../constants/Colors';
import CustomText from '../components/shared/CustomText';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState } from '../features/auth/authSelector';
import { useLoginMutation } from '../features/auth/authApi';
import { setCredentials } from '../features/auth/authSlice';
import LoadingScreen from './LoadingScreen';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const auth = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();

  console.log(auth, "auth")

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

  const handleLogin = async (values: {email:string;password:string}) => {
    try {
      const { data, error } = await login(values);
      console.log(data,"data")
      console.error(error, "error");
      if(data) {
        const {token} = data;
        const user = {name:'Nardos'}; //todo get user from backend
        await AsyncStorage.setItem('userToken', token);
        dispatch(setCredentials({user, token}));
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      }
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  if(isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
     <CustomText style={styles.title}>Chatter</CustomText>
     <CustomText style={styles.subtitle}>Howdy! welcome back</CustomText>
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
    color: Colors.white,
  },
  subtitle : {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 20,
    color: Colors.whiteWithHintOfGrey,
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
