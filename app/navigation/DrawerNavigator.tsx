import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types';
import ProfileNavigator from '../navigation/ProfileNavigator';
import SettingsNavigator from '../navigation/SettingsNavigator';
import CustomDrawerContent from '../navigation/CustomDrawerContent';
import { NAVIGATION } from '../enums';

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
          width: '60%',
          backgroundColor: '#fff',
        },
      }}
    >
      <Drawer.Screen name={NAVIGATION.Dashboard} component={DashboardNavigator} />
      <Drawer.Screen name={NAVIGATION.Profile} component={ProfileNavigator} />
      <Drawer.Screen name={NAVIGATION.Settings} component={SettingsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;