import React from 'react';
import axios from 'axios';
import Toast, {BaseToast} from 'react-native-toast-message';
import {colors} from '../constants';

export default () => {
  axios.defaults.baseURL = 'https://places-lean-node.herokuapp.com';
  axios.defaults.headers['Content-Type'] = 'application/json';
};
