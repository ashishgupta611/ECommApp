import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native'; 

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