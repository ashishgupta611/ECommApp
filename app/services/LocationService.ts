import { NativeEventEmitter } from 'react-native';
import LocationModule from '../module/turbo/LocationModule';
import { Location } from '../interfaces';

type LocationUpdateCallback = (location: Location) => void;

class LocationService {
  private static instance: LocationService;
  private eventEmitter: NativeEventEmitter;
  private subscribers: Set<LocationUpdateCallback> = new Set();

  private constructor() {
    if (!LocationModule) {
      throw new Error('LocationModule is not available');
    }

    this.eventEmitter = new NativeEventEmitter(LocationModule);
    this.eventEmitter.addListener('onLocationChanged', (location: Location) => {
      this.subscribers.forEach(callback => callback(location));
    });
  }

  public static getInstance(): LocationService {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  }

  public async getCurrentLocation(): Promise<Location> {
    if (!LocationModule) {
      throw new Error('LocationModule is not available');
    }
    return await LocationModule.getCurrentLocation();
  }

  public startObserving() {
    if (!LocationModule) {
      throw new Error('LocationModule is not available');
    }
    LocationModule.startObserving();
  }

  public stopObserving() {
    if (!LocationModule) {
      throw new Error('LocationModule is not available');
    }
    LocationModule.stopObserving();
  }

  public subscribe(callback: LocationUpdateCallback): () => void {
    this.subscribers.add(callback);
    return () => this.unsubscribe(callback);
  }

  private unsubscribe(callback: LocationUpdateCallback) {
    this.subscribers.delete(callback);
    if (this.subscribers.size === 0) {
      this.stopObserving();
    }
  }
}

export default LocationService.getInstance();