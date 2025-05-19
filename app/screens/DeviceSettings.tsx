import React, { useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { DrawerNavigationProps } from '../types';
import Header from '../components/Header';

const DeviceSettings: React.FC<DrawerNavigationProps<'Settings'>> = () => {

  // useFocusEffect(useCallback(() => {
  //   StatusBar.setBarStyle('dark-content');
  //   if (Platform.OS === 'android') {
  //     StatusBar.setBackgroundColor('#6200EE');
  //   }
  //   return () => {
  //     console.log('SettingsScreen is unfocused');
  //   };
  // }, [])
  // );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#ffffff"  // Android only
        barStyle="light-content"   // iOS + Android: 'light-content' or 'dark-content'
        translucent={false}
      />
      <Header title="Settings" showBackButton={true} />

      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default DeviceSettings;