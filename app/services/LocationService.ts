import LocationModule from '../module/turbo/LocationModule';
import { Location } from '../interfaces';

class LocationService {
  private static instance: LocationService;
  private module: NonNullable<typeof LocationModule>;

  private constructor() {
    if (!LocationModule) {
      throw new Error('LocationModule is not available');
    }
    this.module = LocationModule;
  }

  public static getInstance(): LocationService {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  }

  async getCurrentLocation(): Promise<Location> {
    try {
      const location = await this.module.getCurrentLocation();
      return {
        latitude: location.latitude,
        longitude: location.longitude,
        accuracy: location.accuracy,
        ...(location.altitude && { altitude: location.altitude }),
        ...(location.speed && { speed: location.speed }),
        ...(location.heading && { heading: location.heading }),
        ...(location.timestamp && { timestamp: location.timestamp }),
      };
    } catch (error) {
      console.error('LocationService Error:', error);
      throw new Error('Failed to get location');
    }
  }
}

export default LocationService.getInstance();