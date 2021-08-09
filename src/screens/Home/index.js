import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Modal from 'react-native-modal';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

import styles from './styles';
import {
  PrimaryButton,
  CustomInput,
  SelectDropDown,
  CustomMarker,
} from '../../components';
import axios from 'axios';
import {displayToast} from '../../utils';
import {images, routeNames} from '../../constants';

// Initial region to start the map with
const INITIAL_REGION = {
  latitude: 30.033333,
  longitude: 31.233334,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const FORM_INITIAL_VALUE = {
  placeType: '',
  placeName: '',
  placePhone: '',
};

// Form Validation

const placeValidationSchema = yup.object().shape({
  placeType: yup.string().required('Place Type is Required'),
  placeName: yup
    .string()
    .min(4, ({min}) => `Place name must be at least ${min} characters`)
    .required('Place name is required'),
  placePhone: yup.number().required('Place Phone is Required'),
});

const Home = ({navigation}) => {
  // Marker Data to show on the map
  const [marker, setMarker] = useState();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // places from the DB
  const [places, setPlaces] = useState([]);

  //Drop Down Select Place type state
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Home', value: 'home'},
    {label: 'Park', value: 'park'},
    {label: 'Restaurant', value: 'restaurant'},
  ]);

  // Get all places on initial laod and on form modal closed
  useEffect(() => {
    axios
      .get('/places')
      .then(res => {
        console.log(res.data);
        setPlaces(res.data);
      })
      .catch(err => {
        console.log({...err});
        // Displaying error if something went wrong
        displayToast('err', err.message);
      });
  }, [isModalVisible]);

  //   Submit new place to back-end
  const onSubmit = values => {
    setLoading(true);
    const place = {
      ...values,
      placeLocation: marker,
    };
    axios
      .post('/places', place)
      .then(res => {
        setLoading(false);
        setIsModalVisible(false);
        displayToast('success', res.data.message);
      })
      .catch(err => {
        setLoading(false);
        setIsModalVisible(false);
        console.log({...err});
        displayToast('success', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={INITIAL_REGION}
        onPress={({nativeEvent}) => setMarker(nativeEvent.coordinate)}>
        {/* Marker to select Places on the map */}
        {marker && (
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        )}
        {/* Saved markers from Db to show on the map */}
        {places.map(place => (
          <CustomMarker key={place.id} place={place} />
        ))}
      </MapView>
      {/* Only show marker if user selects a loctaion on the map */}
      {marker && (
        <View style={styles.btn}>
          <PrimaryButton
            text="Add Place"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      )}

      <View style={styles.placesList}>
        <PrimaryButton
          text="Places List"
          onPress={() => navigation.navigate(routeNames.placeList)}
        />
      </View>

      {/* Add new place form */}
      <Modal
        avoidKeyboard={true}
        onBackdropPress={() => setIsModalVisible(false)}
        isVisible={isModalVisible}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View style={styles.bottomSheet}>
          <Text style={styles.formHeader}>Add Place</Text>
          <Formik
            validationSchema={placeValidationSchema}
            initialValues={FORM_INITIAL_VALUE}
            onSubmit={onSubmit}>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={SelectDropDown}
                  name="placeType"
                  open={open}
                  pickerValue={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  lable="Place Type"
                />
                <Field
                  component={CustomInput}
                  name="placeName"
                  placeholder="Enter Place Name"
                  lable="Place Name"
                />
                <Field
                  component={CustomInput}
                  name="placePhone"
                  placeholder="Enter Place Phone Number"
                  lable="Place Phone"
                  keyboardType="phone-pad"
                />
                <PrimaryButton
                  loading={loading}
                  text="Add Place"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
