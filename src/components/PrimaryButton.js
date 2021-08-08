import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BarIndicator} from 'react-native-indicators';

import {colors} from '../constants';

const PrimaryButton = ({text, loading, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      {loading ? (
        <BarIndicator size={20} color={colors.white} />
      ) : (
        <Text style={styles.btnTxt}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginVertical: 10,
    borderRadius: 8,
  },
  btnTxt: {
    color: colors.white,
    fontWeight: '500',
  },
});
