import { Location } from '../app/interfaces';

const mockLocation: Location = {
    latitude: 37.7749,
    longitude: -122.4194,
    accuracy: 10,
  };
  
  export default {
    getCurrentLocation: jest.fn().mockResolvedValue(mockLocation),
    checkLocationPermission: jest.fn().mockResolvedValue(true),
    requestLocationPermission: jest.fn().mockResolvedValue(true),
  };