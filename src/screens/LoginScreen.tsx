import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { memo } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {

  const navigation = useNavigation();

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
    <View>
     <Text style={styles.title}>Login</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});