import React, { memo, useEffect, useCallback } from 'react';
import i18n from '../assets/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { RootStackParamList } from '../types';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { logout } from '../reducers/authSlice';
import { clearCredentials } from '../reducers/userSlice';
import { resetCart } from '../reducers/cartSlice';
import LogoutButton from '../components/LogoutButton';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import MovieListScreen from '../screens/MovieListScreen';
import DashboardScreen from '../screens/DashboardScreen';
import OrderPlaceScreen from '../screens/OrderPlaceScreen';

import { NAVIGATION } from '../enums';

const Stack = createStackNavigator<RootStackParamList>();

const NavigationService: React.FC = () => {
  const MemoizedLogoutButton = memo(() => <LogoutButton label={t('logout_caps')} onPress={handleLogout} />);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.rootReducer.settings);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleLogout = useCallback(() => {
    //dispatch(clearCredentials());
    dispatch(resetCart());
    dispatch(logout());
  }, []);

  const { isAuthenticated, isRegistering } = useSelector((state: RootState) => state.rootReducer.auth);

  if (isAuthenticated) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={NAVIGATION.Dashboard}
            component={DashboardScreen}
            options={{
              title: t('dashboard'),
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
      </NavigationContainer>
    );
  } else if (isRegistering) {
    return (
      <RegistrationScreen />
    );
  }
  else {
    return (
      <LoginScreen />
    );
  }
};

export default NavigationService;