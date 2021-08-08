import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Toast from 'react-native-toast-message';

import config from './src/config';
import RootNavigator from './src/navigation';

const App = () => {
  useEffect(() => config(), []);

  return (
    <>
      <RootNavigator />
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};
export default App;
