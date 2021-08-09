import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../constants';

const SelectDropDown = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, setFieldValue},
    open,
    pickerValue,
    items,
    setOpen,
    setValue,
    setItems,
    lable,
  } = props;
  const hasError = errors[name];

  return (
    <>
      <Text style={styles.lable}>{lable}</Text>
      <DropDownPicker
        open={open}
        value={pickerValue}
        items={items}
        setOpen={setOpen}
        setValue={val => {
          setValue(val());
          setFieldValue(name, val());
        }}
        setItems={setItems}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

export default SelectDropDown;

const styles = StyleSheet.create({
  lable: {
    color: colors.primary,
    marginVertical: 5,
  },
  errorText: {
    fontSize: 12,
    color: colors.red,
    marginVertical: 5,
  },
});
