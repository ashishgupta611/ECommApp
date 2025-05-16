import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import { Location } from '../../interfaces';

export interface Spec extends TurboModule {
  getCurrentLocation(): Promise<Location>;
  checkLocationPermission(): Promise<boolean>;
  requestLocationPermission(): Promise<boolean>;

  //startObserving(): void;
  //stopObserving(): void;

  // Event emitter for location updates
  //addListener(eventName: string): void;
  //removeListeners(count: number): void;
}

export default TurboModuleRegistry.get<Spec>('LocationModule') as Spec | null;