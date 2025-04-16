import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import LocationService from '../services/LocationService';
import  { Location } from '../interfaces';

const LocationComponent = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app needs access to your location',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            setError('Location permission denied');
            return;
          }
        } catch (err) {
          setError('Permission request error');
          return;
        }
      }

      // Get initial location
      LocationService.getCurrentLocation()
        .then(setLocation)
        .catch(err => setError(err.message));

      // Subscribe to updates
      const unsubscribe = LocationService.subscribe(newLocation => {
        setLocation(newLocation);
      });

      LocationService.startObserving();

      return () => {
        unsubscribe();
        LocationService.stopObserving();
      };
    };

    requestLocationPermission();
  }, []);

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View>
        <Text>Loading location...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Latitude: {location.latitude}</Text>
      <Text>Longitude: {location.longitude}</Text>
      <Text>Accuracy: {location.accuracy} meters</Text>
      {location.altitude && <Text>Altitude: {location.altitude} meters</Text>}
      {location.speed && <Text>Speed: {location.speed} m/s</Text>}
      {location.heading && <Text>Heading: {location.heading}°</Text>}
    </View>
  );
};

export default LocationComponent;