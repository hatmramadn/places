import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, images, shadows} from '../constants';

const Place = ({place}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.imageContainer}>
          <Image
            source={
              place.placeType == 'home'
                ? images.homeMarker
                : place.placeType == 'restaurant'
                ? images.restaurantMarker
                : place.placeType == 'park'
                ? images.parkMarker
                : images.marker
            }
            style={{
              height: 50,
              width: 35,
            }}
          />
        </View>
        <View
          style={{
            flex: 4,
            padding: 20,
          }}>
          <Text style={styles.heading}>{place.placeName}</Text>
          <Text style={styles.subHeading}>{place.placePhone}</Text>
        </View>
      </View>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    ...shadows.lightShadowGrey,
    elevation: 5,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1.5,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  heading: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 14,
    color: colors.greyDark,
  },
});
