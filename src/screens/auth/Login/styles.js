import {StyleSheet} from 'react-native';
import {colors, shadows} from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
    justifyContent: 'center',
  },
  formGroup: {
    backgroundColor: colors.white,
    ...shadows.extraLightShadowGrey,
    elevation: 5,
    padding: 20,
    borderRadius: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 20,
  },
});
