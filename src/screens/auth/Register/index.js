import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

import styles from './styles';
import CustomInput from '../../../components/CustomInput';
import {LinkButton, PrimaryButton} from '../../../components';
import axios from 'axios';
import {displayToast} from '../../../utils';
import {routeNames} from '../../../constants';

const registerValidationSchema = yup.object().shape({
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

  const onSubmit = async values => {
    setLoading(true);
    axios
      .post('/users/register', values)
      .then(res => {
        setLoading(false);
        displayToast('success', 'Loggedin Successfully');

        console.log({...res});
      })
      .catch(err => {
        setLoading(false);
        displayToast('error', err.response.data.message);
        console.log({...err});
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.heading}>Register</Text>
        <Formik
          validationSchema={registerValidationSchema}
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
          <Text style={{marginHorizontal: 5}}>Have account?</Text>
          <LinkButton text="Login" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};

export default Login;
