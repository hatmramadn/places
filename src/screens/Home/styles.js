import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btn: {
    position: 'absolute',
    zIndex: 10,
    width: '90%',
    bottom: 10,
  },
  formHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.secondary,
    marginBottom: 10,
  },
  bottomSheet: {
    backgroundColor: colors.white,
    padding: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  placesList: {
    position: 'absolute',
    zIndex: 20,
    top: 50,
    left: 20,
    width: '30%',
  },
});
