import { NAVIGATION } from '../enums';
import { Product } from '../types';

export type RootStackParamList = {
  [NAVIGATION.Dashboard]: undefined;
  [NAVIGATION.OrderPlace]: Product;
  [NAVIGATION.MovieList]: undefined;
};
