import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

import styles from './styles';
import CustomInput from '../../../components/CustomInput';
import {LinkButton, PrimaryButton} from '../../../components';
import axios from 'axios';
import {displayToast} from '../../../utils';
import {routeNames} from '../../../constants';

// Form Validation Scheme
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  // Submit Handler
  const onSubmit = async values => {
    setLoading(true);
    // Calling node back-end (login end-point)
    axios
      .post('/users/login', values)
      .then(res => {
        setLoading(false);
        // if success Displaying a toast and navigating to home
        displayToast('success', 'Loggedin Successfully');
        navigation.replace(routeNames.home);
        console.log({...res});
      })
      .catch(err => {
        setLoading(false);
        // if error Displaying a toast with the error message
        displayToast('error', err.response.data.message);
        console.log({...err});
      });
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.formGroup}>
          <Text style={styles.heading}>Login</Text>

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={onSubmit}>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder="Enter Email Address"
                  keyboardType="email-address"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="Enter Password"
                  secureTextEntry
                />
                <PrimaryButton
                  loading={loading}
                  text="Login"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>

          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{marginHorizontal: 5}}>Don't have account?</Text>
            <LinkButton
              text="Register"
              onPress={() => navigation.navigate(routeNames.register)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
