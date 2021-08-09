import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {BarIndicator} from 'react-native-indicators';

import styles from './styles';
import {displayToast} from '../../utils';
import {colors, images, shadows} from '../../constants';
import {Place} from '../../components';

const Places = ({navigation}) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sorting place array by name
  const sortedPlace = places.sort((a, b) =>
    a.placeName > b.placeName ? 1 : b.placeName > a.placeName ? -1 : 0,
  );

  // Getting All Places form fireStore
  const getPlaces = () => {
    setLoading(true);

    axios
      .get('/places')
      .then(res => {
        setLoading(false);
        setPlaces(res.data);
      })
      .catch(err => {
        setLoading(false);
        console.log({...err});
        // Displaying error if something went wrong
        displayToast('err', err.message);
      });
  };

  // Get All places on initial load
  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Image source={images.back} style={{width: 15, height: 15}} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Place List</Text>
      </View>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BarIndicator color={colors.primary} size={20} />
        </View>
      ) : (
        <FlatList
          ListEmptyComponent={<Text>There's no places...</Text>}
          refreshing={loading}
          onRefresh={getPlaces}
          contentContainerStyle={{padding: 20}}
          data={sortedPlace}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Place place={item} />}
        />
      )}
    </View>
  );
};

export default Places;
