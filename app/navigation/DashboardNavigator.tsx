import { TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootStackParamList, RootDrawerParamList } from '../types';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { NAVIGATION } from '../enums';
import LogoutButton from '../components/LogoutButton';

import MovieListScreen from '../screens/MovieListScreen';
import DashboardScreen from '../screens/DashboardScreen';
import OrderPlaceScreen from '../screens/OrderPlaceScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

type DashboardNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, NAVIGATION.Dashboard>,
  DrawerNavigationProp<RootDrawerParamList>
>;

type Props = {
  navigation: DashboardNavigationProp;
  route: RouteProp<RootStackParamList, NAVIGATION.Dashboard>;
};

const DashboardNavigator = ({ navigation }: Props) => {
    const { t } = useTranslation();
    const MemoizedLogoutButton = memo(() => <LogoutButton />);

    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            name={NAVIGATION.Dashboard}
            component={DashboardScreen}
            options={{
              // headerShown: false,
              title: t('dashboard'),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Text style={{ padding: 14, fontWeight: 'bold', fontSize:18 }}>☰</Text>
                </TouchableOpacity>
              ),
              headerRight: () => (<MemoizedLogoutButton />)
            }}
          />
          <Stack.Screen
            name={NAVIGATION.OrderPlace}
            component={OrderPlaceScreen}
            options={{
              title: t('place_order')
            }}
          />
          <Stack.Screen
            name={NAVIGATION.MovieList}
            component={MovieListScreen}
            options={{
              title: t('popularMovies'),
              headerRight: () => (<MemoizedLogoutButton />)
            }}
          />
        </Stack.Navigator>
    );
  };

  export default DashboardNavigator;