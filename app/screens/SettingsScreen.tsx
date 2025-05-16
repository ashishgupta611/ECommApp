import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerNavigationProps } from '../types';

const SettingsScreen: React.FC<DrawerNavigationProps<'Settings'>> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default SettingsScreen;