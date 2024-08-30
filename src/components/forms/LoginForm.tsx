/* eslint-disable quotes */
import React, { memo } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../shared/CustomButton';
import { Formik } from 'formik';
import Colors from '../../constants/Colors';
import { loginValidationSchema } from '../../validation/loginValidationSchema';

const LoginForm = (props:any) => {
  const {handleLogin} = props;
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        // onSubmit={handleLogin}
        onSubmit={(values) => console.log(values)}
      >
        {
          ({handleChange, handleBlur, handleSubmit, values, errors, isValid,touched}) => (
            <>
              <TextInput
                id="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholderTextColor={Colors.border}
                keyboardType={"email-address"}
               />
                {(errors.email && touched.email) &&
                  <Text style={styles.error}>{errors.email}</Text>
                }
                <TextInput
                  id="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholderTextColor={Colors.border}
                  secureTextEntry
                />
                {(errors.password && touched.password) &&
                  <Text style={styles.error}>{errors.password}</Text>
                }
              <CustomButton disabled={!isValid} style={styles.buttonStyle} title="Login" onPress={handleSubmit}/>
            </>
          )
        }
      </Formik>
    </View>
  );
};

export default memo(LoginForm);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  buttonStyle : {
    width: '100%',
    marginVertical: 6,
  },
  textInput: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    color: Colors.white,
  },
  error: { fontSize: 10, color: 'red' },
});
