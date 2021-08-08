import Toast from 'react-native-toast-message';

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const displayToast = (type, message) => {
  Toast.show({
    type: type,
    text1: type === 'error' ? 'Error' : 'Success',
    text2: message,
    topOffset: 50,
    visibilityTime: 2000,
  });
};
