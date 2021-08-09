import {StyleSheet} from 'react-native';
import {colors, shadows} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.white,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    ...shadows.lightShadowGrey,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    borderColor: colors.greyDark,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  headerTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primary,
    marginHorizontal: 20,
  },
});
