import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//import { clearCredentials } from '../reducers/userSlice';
import { logout } from '../reducers/authSlice';
import { resetCart } from '../reducers/cartSlice';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

const LogoutButton: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    //dispatch(clearCredentials());
    dispatch(resetCart());
    dispatch(logout());
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={handleLogout}>
      <Text style={styles.label}>
        {t('logout_caps')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.ERROR,
    marginRight: 16,
  },
  label: {
    textAlignVertical: 'center',
    fontSize: 14,
    height: 40,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LogoutButton;
