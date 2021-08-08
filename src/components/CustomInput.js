import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../constants';
import {capitalizeFirstLetter} from '../utils';
const CustomInput = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <Text style={styles.lable}>{capitalizeFirstLetter(name)}</Text>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    marginVertical: 5,
    borderColor: colors.greyDark,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 12,
    color: colors.red,
    marginVertical: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  lable: {
    color: colors.primary,
    marginVertical: 5,
  },
});

export default CustomInput;
