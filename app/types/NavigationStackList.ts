import { NAVIGATION, ProfileNavigation } from '../enums';
import { Product } from '.';

export type DashboardNavStackList = {
  [NAVIGATION.Dashboard]: undefined;
  [NAVIGATION.OrderPlace]: Product;
  [NAVIGATION.MovieList]: undefined;
};

export type ProfileNavStackList = {
  [ProfileNavigation.Profile]: undefined;
  [ProfileNavigation.EditProfile]: undefined;
};

export type SettingsNavStackList = {
  [NAVIGATION.Settings]: undefined;
};
