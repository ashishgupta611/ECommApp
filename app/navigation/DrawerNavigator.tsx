import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawerContent from '../navigation/CustomDrawerContent';
import { NAVIGATION, DRAWER_NAVIGATION } from '../enums';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
import DashboardNavigator from './DashboardNavigator';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {
          width: '70%',
          backgroundColor: '#fff',
        },
      }}
    >
      <Drawer.Screen name={NAVIGATION.Dashboard} component={DashboardNavigator} />
      <Drawer.Screen name={DRAWER_NAVIGATION.Profile} component={ProfileScreen} />
      <Drawer.Screen name={DRAWER_NAVIGATION.Settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;