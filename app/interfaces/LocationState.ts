export interface LocationState {
  loading: boolean;
  location?: {
    latitude: number;
    longitude: number;
    accuracy: number;
  };
  error?: string;
};
