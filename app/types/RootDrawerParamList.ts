import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NAVIGATION } from '../enums';

export type RootDrawerParamList = {
    Dashboard: undefined;
    Profile: undefined;
    Settings: undefined;
    Notifications: undefined;
    // Add other screens here
  };

  export type DrawerNavigationProps<T extends keyof RootDrawerParamList> = {
    navigation: DrawerNavigationProp<RootDrawerParamList, T>;
    route: RouteProp<RootDrawerParamList, T>;
  };

  export type ScreenComponent<T extends keyof RootDrawerParamList> = React.FC<DrawerNavigationProps<T>>;