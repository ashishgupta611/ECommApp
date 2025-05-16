import React from 'react';
import { View, Text } from 'react-native';
import { ScreenComponent } from '../types';

const ProfileScreen: ScreenComponent<'Profile'> = ({ navigation, route }) => {
  // Your component implementation
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;