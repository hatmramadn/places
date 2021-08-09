import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Marker} from 'react-native-maps';
import {images} from '../constants';

const CustomMarker = ({place, type}) => {
  return (
    <Marker
      coordinate={place.placeLocation}
      title={place.placeName}
      description={place.placePhone}>
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
          height: 70,
          width: 50,
        }}
      />
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({});
