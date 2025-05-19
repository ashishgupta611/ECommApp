import { NAVIGATION } from '../enums';
import { Product } from '.';

export type DashboardNavStackList = {
  [NAVIGATION.Dashboard]: undefined;
  [NAVIGATION.OrderPlace]: Product;
  [NAVIGATION.MovieList]: undefined;
};

export type ProfileNavStackList = {
  [NAVIGATION.Profile]: undefined;
  [NAVIGATION.EditProfile]: undefined;
};

export type SettingsNavStackList = {
  [NAVIGATION.Settings]: undefined;
};
