import React from 'react';
import { View, Text } from 'react-native';
import { ScreenComponent } from '../types';
import Header from '../components/Header';

const ProfileScreen: ScreenComponent<'Profile'> = ({ navigation, route }) => {
  // Your component implementation
  return (
    <View>
      {/* <Header title='Profile' showBackButton={true}/> */}
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;