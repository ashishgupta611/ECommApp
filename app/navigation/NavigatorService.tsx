import React, { useEffect } from 'react';
import i18n from '../assets/i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import DrawerNavigator from './DrawerNavigator';

const NavigationService: React.FC = () => {
  const { language } = useSelector((state: RootState) => state.rootReducer.settings);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const { isAuthenticated, isRegistering } = useSelector((state: RootState) => state.rootReducer.auth);

  if (isAuthenticated) {
    return (
      <NavigationContainer>
        <DrawerNavigator />
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